import { LayoutDashboard, Moon, Sun, Swords, Wallet } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Switch } from "../ui/switch";

export function SideBar() {
    const location = useLocation();
    const { setOpenMobile } = useSidebar();
    const { theme, toggleTheme } = useTheme();

    const sidebarItems = [
        { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
        { name: "Tournaments", path: "/tournaments", icon: Swords },
        { name: "Wallet", path: "/wallet", icon: Wallet },
    ];

    return (
        <Sidebar className="border-r border-border bg-card">
            <SidebarHeader className="p-4 border-b border-border/40">
                <span className="text-sm font-black uppercase tracking-widest text-primary">
                    Arena Platform
                </span>
            </SidebarHeader>

            <SidebarContent className="p-2">
                <SidebarGroup>
                    <SidebarMenu className="gap-1">
                        {sidebarItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname.startsWith(item.path);

                            return (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive}
                                        className="font-semibold rounded-lg transition-colors py-5"
                                    >
                                        <Link
                                            to={item.path}
                                            className="flex items-center gap-3"
                                            onClick={() => setOpenMobile(false)}
                                        >
                                            <Icon className={`h-4 w-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                                            <span>{item.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-border/40 text-xs font-semibold text-muted-foreground">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="w-full flex items-center justify-between font-semibold rounded-lg py-3 px-3 hover:bg-accent/40 text-muted-foreground hover:text-foreground transition-colors group">
                            <div className="flex items-center gap-3 select-none">
                                {theme === "dark" ? (
                                    <>
                                        <Moon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                                        <span className="text-sm">Dark Theme</span>
                                    </>
                                ) : (
                                    <>
                                        <Sun className="h-4 w-4 text-amber-500 group-hover:rotate-45 transition-transform duration-300" />
                                        <span className="text-sm">Light Theme</span>
                                    </>
                                )}
                            </div>

                            <Switch
                                checked={theme === "light"}
                                onCheckedChange={toggleTheme}
                                className="data-[state=checked]:bg-primary"
                            />
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
import { Outlet } from "react-router"
import { SideBar } from "./components/sidebard/SideBar"
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen bg-background text-foreground overflow-hidden relative scroll-smooth">
        <SideBar />
        <div className="absolute top-4 left-4 z-50 md:hidden">
          <SidebarTrigger className="bg-card border border-border text-foreground rounded-lg" />
        </div>

        <main className="flex-1 overflow-y-auto min-w-0 w-full">
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 pt-14 sm:pt-6 space-y-6">
            <Outlet />
          </div>
        </main>

        <Toaster
          position="top-right"
          toastOptions={{
            className: "bg-card border border-border text-foreground font-semibold rounded-xl text-sm",
            style: {
              background: "oklch(0.16 0.02 265)",
              borderColor: "oklch(0.22 0.03 265)",
              color: "oklch(0.985 0 0)",
            },
            success: {
              iconTheme: {
                primary: "oklch(0.78 0.22 170)",
                secondary: "oklch(0.15 0.04 170)",
              },
            },
          }}
        />
      </div>
    </SidebarProvider>
  )
}

export default App

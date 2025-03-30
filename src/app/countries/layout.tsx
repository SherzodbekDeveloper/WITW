import Navbar from '@/components/navbar'
import { ChildProps } from '@/types'

function Layout({ children }: ChildProps) {
     return (
          <main>
               <Navbar />
               <div >{children}</div>

          </main>
     )
}

export default Layout

import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { CreateContentModal } from "../components/CreateContentModal"
import { useState } from "react"
import { Sidebar } from "../components/Sidebar"

export function Dashboard() {
  const [modalOpen,  setModalOpen] = useState(true);

  return <div>
    <Sidebar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100">
    <CreateContentModal open={modalOpen} onClose={() => {
      setModalOpen(false);
    }} />
    <div className="flex m-4 gap-4">
      <div className="font-bold text-2xl ml-8">All Notes</div>
      <div className="flex ml-[50vw] gap-4">

    <Button onClick={() => {
      setModalOpen(true)
    }} variant="primary" text="Add content" startIcon={<PlusIcon />}></Button>
    <Button variant="secondary" text="Share brain" startIcon={<ShareIcon />}></Button>
    </div>
    </div>
    <div className="flex gap-4 pt-4">
      <Card type="twitter" link="https://twitter.com/username/status/807811447862468608" title="first tweet" />
      <Card type="youtube" link="https://www.youtube.com/watch?v=aHHUcS3GeSo" title="first tweet" />
    </div>
    </div>
  </div>
}

export default Dashboard
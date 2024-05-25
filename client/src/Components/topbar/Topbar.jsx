import "./topbar.css"

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">StoryBook</span>
        </div>

        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Logout</span>
            </div>
            <img src="/assets/4.jpg" alt="" className="topbarImg"/>
        </div>
    </div>
  )
}

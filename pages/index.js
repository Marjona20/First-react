import Link from "next/link"
import Header from '../containers/Header'

export default function Home() {
  return (
    <div>
       < Header/>
       <div className="container px-5 w-75 py-2 my-5">
        <div className="list-group">
          <div className="list-group-item list-group-item-action">
          <Link href="/users"><a>
            <div className="d-flex w-100 justify-content-between">
            <h3>Users</h3>
              <small className="text-muted">3 days ago</small>
            </div>
            <small className="text-muted">And some muted small print.</small>
            </a></Link>
          </div>
          <div className="list-group-item list-group-item-action">
          <Link href="/todos"><a>
            <div className="d-flex w-100 justify-content-between">
            <h3>Todos</h3>
              <small className="text-muted">3 days ago</small>
            </div>
            <small className="text-muted">And some muted small print.</small>
            </a></Link>
          </div>
          <div className="list-group-item list-group-item-action">
          <Link href="/photos"><a>
            <div className="d-flex w-100 justify-content-between">
            <h3>Photos</h3>
              <small className="text-muted">3 days ago</small>
            </div>
            <small className="text-muted">And some muted small print.</small>
            </a></Link>
          </div>
          <div className="list-group-item list-group-item-action">
          <Link href="/posts"><a>
            <div className="d-flex w-100 justify-content-between">
            <h3>Posts</h3>
              <small className="text-muted">3 days ago</small>
            </div>
            <small className="text-muted">And some muted small print.</small>
            </a></Link>
          </div>
      </div>
   </div>
</div>   
)
}

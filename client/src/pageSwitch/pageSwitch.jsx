import 'bootstrap/dist/css/bootstrap.min.css';

function PageSwitch({page, pages, goToPage}) {
    return (
        <div className="control-center">
            <button className="btn bg-unua text-white" 
                onClick={() => goToPage(Math.max(1, page - 1))}
                disabled={page === 1}
            >
                Попередня
            </button>
            <span className="align-self-center">{page} / {pages}</span>
            <button className="btn bg-unua text-white"
                onClick={() => goToPage(Math.min(pages, page + 1))} 
                disabled={page === pages}
            >
                Наступна
            </button>
        </div>
    )
}

export default PageSwitch

import github from "../assets/github.png"

function PageFooter() {
    return (
        <footer className="flex bg-slate-800 h-20 p-5 items-center justify-between font-mono">
            <p className="text-white">2024 Create by Peemapos</p>
            <a href="https://github.com/Peemapos" target="blank">
                <img src={github} alt="github" />
            </a>
        </footer>
    )
}



export default PageFooter;
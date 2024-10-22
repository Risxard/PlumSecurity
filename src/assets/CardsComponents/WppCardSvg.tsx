const SmartCardSvg = () => {
    return (
        <svg className="card-meet-svg" aria-hidden="true">
            <defs>
                <pattern
                    id="genius-pattern"
                    width="44"
                    height="44"
                    x="50%"
                    y="100%"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M.5 200V.5H200"
                        fill="none"
                        stroke="currentColor"
                    />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#genius-pattern)"
            />
        </svg>
    )
}

export default SmartCardSvg
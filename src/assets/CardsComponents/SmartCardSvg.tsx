const CardMeetSvg = () => {
    return (
        <svg className="card-smart-svg p-m-card"  preserveAspectRatio="xMinYMin slice">
            <pattern
                id="diagonalHatch"
                patternUnits="userSpaceOnUse"
                width="4"
                height="8"
                patternTransform="rotate(45 2 2)"
            >
                <path
                    d="M -1,2 l 6,0"
                    stroke="#A3A7B1"
                    strokeWidth="0.5"
                />
            </pattern>
            <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#diagonalHatch)"
            />
        </svg>
    )
}

export default CardMeetSvg

import { Icon } from "../../index";

/**
 * A component that renders the `dice` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice?s=solid dice}
 * @preview ![dice](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTIgMTkySDQ3My4yNUM0NzcuNjY4IDIwMi4yNjYgNDc5Ljg3OSAyMTMuMjUyIDQ3OS44NzkgMjI0LjIzMUM0NzkuODc5IDI0NC45MzQgNDcyLjAxNCAyNjUuNjEgNDU2LjI1IDI4MS4zNzVMMzIwIDQxNy42MjVWNDY0QzMyMCA0OTAuNSAzNDEuNSA1MTIgMzY4IDUxMkg1OTJDNjE4LjUgNTEyIDY0MCA0OTAuNSA2NDAgNDY0VjI0MEM2NDAgMjEzLjUgNjE4LjUgMTkyIDU5MiAxOTJaTTQ4MCAzNzZDNDY2Ljc1IDM3NiA0NTYgMzY1LjI1IDQ1NiAzNTJTNDY2Ljc1IDMyOCA0ODAgMzI4UzUwNCAzMzguNzUgNTA0IDM1MlM0OTMuMjUgMzc2IDQ4MCAzNzZaTTQ0Ny45OTkgMjI0QzQ0Ny45OTkgMjExLjQzNiA0NDMuMjE3IDE5OC44NzEgNDMzLjY1NCAxODkuMjQ0TDI1OC43NTMgMTQuMzQ2QzI0OS4xMjcgNC43ODEgMjM2LjU2MyAtMC4wMDEgMjI0IC0wLjAwMVMxOTguODcyIDQuNzgxIDE4OS4yNDYgMTQuMzQ2TDE0LjM0NSAxODkuMjQ0QzQuNzgyIDE5OC44NzEgMCAyMTEuNDM2IDAgMjI0UzQuNzgyIDI0OS4xMjggMTQuMzQ1IDI1OC43NTRMMTg5LjI0NiA0MzMuNjU0QzE5OC44NzIgNDQzLjIxOCAyMTEuNDM2IDQ0OCAyMjQgNDQ4UzI0OS4xMjcgNDQzLjIxOCAyNTguNzUzIDQzMy42NTRMNDMzLjY1NCAyNTguNzU0QzQ0My4yMTcgMjQ5LjEyOCA0NDcuOTk5IDIzNi41NjQgNDQ3Ljk5OSAyMjRaTTk2IDI0OEM4Mi43NSAyNDggNzIgMjM3LjI1IDcyIDIyNFM4Mi43NSAyMDAgOTYgMjAwUzEyMCAyMTAuNzUgMTIwIDIyNFMxMDkuMjUgMjQ4IDk2IDI0OFpNMjI0IDM3NkMyMTAuNzUgMzc2IDIwMCAzNjUuMjUgMjAwIDM1MlMyMTAuNzUgMzI4IDIyNCAzMjhTMjQ4IDMzOC43NSAyNDggMzUyUzIzNy4yNSAzNzYgMjI0IDM3NlpNMjI0IDI0OEMyMTAuNzUgMjQ4IDIwMCAyMzcuMjUgMjAwIDIyNFMyMTAuNzUgMjAwIDIyNCAyMDBTMjQ4IDIxMC43NSAyNDggMjI0UzIzNy4yNSAyNDggMjI0IDI0OFpNMjI0IDEyMEMyMTAuNzUgMTIwIDIwMCAxMDkuMjUgMjAwIDk2UzIxMC43NSA3MiAyMjQgNzJTMjQ4IDgyLjc1IDI0OCA5NlMyMzcuMjUgMTIwIDIyNCAxMjBaTTM1MiAyNDhDMzM4Ljc1IDI0OCAzMjggMjM3LjI1IDMyOCAyMjRTMzM4Ljc1IDIwMCAzNTIgMjAwUzM3NiAyMTAuNzUgMzc2IDIyNFMzNjUuMjUgMjQ4IDM1MiAyNDhaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
const Dice: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M592 192H473.25C477.668 202.266 479.879 213.252 479.879 224.231C479.879 244.934 472.014 265.61 456.25 281.375L320 417.625V464C320 490.5 341.5 512 368 512H592C618.5 512 640 490.5 640 464V240C640 213.5 618.5 192 592 192ZM480 376C466.75 376 456 365.25 456 352S466.75 328 480 328S504 338.75 504 352S493.25 376 480 376ZM447.999 224C447.999 211.436 443.217 198.871 433.654 189.244L258.753 14.346C249.127 4.781 236.563 -0.001 224 -0.001S198.872 4.781 189.246 14.346L14.345 189.244C4.782 198.871 0 211.436 0 224S4.782 249.128 14.345 258.754L189.246 433.654C198.872 443.218 211.436 448 224 448S249.127 443.218 258.753 433.654L433.654 258.754C443.217 249.128 447.999 236.564 447.999 224ZM96 248C82.75 248 72 237.25 72 224S82.75 200 96 200S120 210.75 120 224S109.25 248 96 248ZM224 376C210.75 376 200 365.25 200 352S210.75 328 224 328S248 338.75 248 352S237.25 376 224 376ZM224 248C210.75 248 200 237.25 200 224S210.75 200 224 200S248 210.75 248 224S237.25 248 224 248ZM224 120C210.75 120 200 109.25 200 96S210.75 72 224 72S248 82.75 248 96S237.25 120 224 120ZM352 248C338.75 248 328 237.25 328 224S338.75 200 352 200S376 210.75 376 224S365.25 248 352 248Z " />
    </Icon>
);

export default Dice;
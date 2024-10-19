
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `person-hiking` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-hiking?s=light person-hiking}
 * @preview ![person-hiking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjcuOTk0IDIyNFYxNDRDMzY3Ljk5NCAxMzUuMTU2IDM2MC44MzggMTI4IDM1MS45OTQgMTI4UzMzNS45OTQgMTM1LjE1NiAzMzUuOTk0IDE0NFYyMjRIMzEzLjA1N0wyODMuODM4IDE3NS4yOTdDMjcyLjI3NiAxNTYgMjUxLjA4OCAxNDQgMjI4LjU1NyAxNDRDMTk5LjkzMiAxNDQgMTc0LjQzMiAxNjMuMjM0IDE2Ni41ODggMTkwLjc1TDE1NS45MDEgMjI4LjE0MUMxNDcuMzM4IDI1OC4wOTQgMTU3LjA4OCAyOTAuNTYyIDE4MC43NDQgMzEwLjg0NEwyNTAuNDAxIDM3MC41NzhDMjUzLjk2MyAzNzMuNjI1IDI1NS45OTQgMzc4LjA0NyAyNTUuOTk0IDM4Mi43MTlWNDk2QzI1NS45OTQgNTA0Ljg0NCAyNjMuMTUxIDUxMiAyNzEuOTk0IDUxMlMyODcuOTk0IDUwNC44NDQgMjg3Ljk5NCA0OTZWMzgyLjcxOUMyODcuOTk0IDM2OC42ODcgMjgxLjg2OSAzNTUuNDA2IDI3MS4yMTMgMzQ2LjI4MUwyMDEuNTU3IDI4Ni41NjJDMTg3LjM2OSAyNzQuMzkxIDE4MS41MjYgMjU0LjkwNiAxODYuNjUxIDIzNi45MzhMMTk3LjMzOCAxOTkuNTQ3QzIwMS4zMDcgMTg1LjY4OCAyMTQuMTUxIDE3NiAyMjguNTU3IDE3NkMyMzkuOTAxIDE3NiAyNTAuNTU3IDE4Mi4wMzEgMjU2LjQwMSAxOTEuNzY2TDI5MC4yNzYgMjQ4LjIzNEMyOTMuMTUxIDI1My4wNDcgMjk4LjM2OSAyNTYgMzAzLjk5NCAyNTZIMzM1Ljk5NFY0OTZDMzM1Ljk5NCA1MDQuODQ0IDM0My4xNTEgNTEyIDM1MS45OTQgNTEyUzM2Ny45OTQgNTA0Ljg0NCAzNjcuOTk0IDQ5NlYyNTZDMzc2LjgzOCAyNTYgMzgzLjk5NCAyNDguODQ0IDM4My45OTQgMjQwUzM3Ni44MzggMjI0IDM2Ny45OTQgMjI0Wk0xNjMuODY5IDM1Mi40ODRDMTU1LjExOSAzNTAuMjUgMTQ2LjU4OCAzNTUuNTQ3IDE0NC40NjMgMzY0LjEyNUwxMTIuNDYzIDQ5Mi4xMjVDMTEwLjMzOCA1MDAuNjg3IDExNS41MjYgNTA5LjM3NSAxMjQuMTE5IDUxMS41MTZDMTI1LjQzMiA1MTEuODQ0IDEyNi43MTMgNTEyIDEyNy45OTQgNTEyQzEzNS4xODIgNTEyIDE0MS43MTMgNTA3LjE1NiAxNDMuNTI2IDQ5OS44NzVMMTc1LjUyNiAzNzEuODc1QzE3Ny42NTEgMzYzLjMxMiAxNzIuNDYzIDM1NC42MjUgMTYzLjg2OSAzNTIuNDg0Wk0yNjMuOTk0IDExMkMyOTQuODY5IDExMiAzMTkuOTk0IDg2Ljg3NSAzMTkuOTk0IDU2UzI5NC44NjkgMCAyNjMuOTk0IDBTMjA3Ljk5NCAyNS4xMjUgMjA3Ljk5NCA1NlMyMzMuMTE5IDExMiAyNjMuOTk0IDExMlpNMjYzLjk5NCAzMkMyNzcuMjEzIDMyIDI4Ny45OTQgNDIuNzY2IDI4Ny45OTQgNTZTMjc3LjIxMyA4MCAyNjMuOTk0IDgwUzIzOS45OTQgNjkuMjM0IDIzOS45OTQgNTZTMjUwLjc3NiAzMiAyNjMuOTk0IDMyWk0xNjAuMzY5IDkxLjQ2OUMxNTguMzA3IDg3Ljc1IDE1NC44NjkgODUgMTUwLjgwNyA4My44MjhDMTAxLjcxMyA2OS41MzEgNDcuMjQ0IDEwMi40MjIgMzEuODM4IDE1NS41NDdMMC42MTkgMjYzLjEwOUMtMC41OTkgMjY3LjM5MSAtMC4wMDYgMjcxLjk4NCAyLjI3NiAyNzUuODEyQzQuNTg4IDI3OS42MjUgOC4zNjkgMjgyLjMxMiAxMi43NDQgMjgzLjIxOUw4OS41ODggMjk5LjIzNEM5MC42ODIgMjk5LjQ2OSA5MS43NzYgMjk5LjU3OCA5Mi44MzggMjk5LjU3OEM5OS44MzggMjk5LjU3OCAxMDYuMTgyIDI5NC45ODQgMTA4LjIxMyAyODguMDMxTDE2MS43MTMgMTAzLjY0MUMxNjIuOTAxIDk5LjU3OCAxNjIuNDAxIDk1LjE4OCAxNjAuMzY5IDkxLjQ2OVpNODEuNTg4IDI2NC44OTFMMzYuMTgyIDI1NS40MjJMNjIuNTg4IDE2NC40NTNDNjcuNTI2IDE0Ny40MzggNzguOTk0IDEzMi4xNzIgOTQuMDg4IDEyMi41NDdDMTA0LjE4MiAxMTYuMTA5IDExNS4wODggMTEyLjcwMyAxMjUuODM4IDExMi40NjlMODEuNTg4IDI2NC44OTFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PersonHiking(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M367.994 224V144C367.994 135.156 360.838 128 351.994 128S335.994 135.156 335.994 144V224H313.057L283.838 175.297C272.276 156 251.088 144 228.557 144C199.932 144 174.432 163.234 166.588 190.75L155.901 228.141C147.338 258.094 157.088 290.562 180.744 310.844L250.401 370.578C253.963 373.625 255.994 378.047 255.994 382.719V496C255.994 504.844 263.151 512 271.994 512S287.994 504.844 287.994 496V382.719C287.994 368.687 281.869 355.406 271.213 346.281L201.557 286.562C187.369 274.391 181.526 254.906 186.651 236.938L197.338 199.547C201.307 185.688 214.151 176 228.557 176C239.901 176 250.557 182.031 256.401 191.766L290.276 248.234C293.151 253.047 298.369 256 303.994 256H335.994V496C335.994 504.844 343.151 512 351.994 512S367.994 504.844 367.994 496V256C376.838 256 383.994 248.844 383.994 240S376.838 224 367.994 224ZM163.869 352.484C155.119 350.25 146.588 355.547 144.463 364.125L112.463 492.125C110.338 500.687 115.526 509.375 124.119 511.516C125.432 511.844 126.713 512 127.994 512C135.182 512 141.713 507.156 143.526 499.875L175.526 371.875C177.651 363.312 172.463 354.625 163.869 352.484ZM263.994 112C294.869 112 319.994 86.875 319.994 56S294.869 0 263.994 0S207.994 25.125 207.994 56S233.119 112 263.994 112ZM263.994 32C277.213 32 287.994 42.766 287.994 56S277.213 80 263.994 80S239.994 69.234 239.994 56S250.776 32 263.994 32ZM160.369 91.469C158.307 87.75 154.869 85 150.807 83.828C101.713 69.531 47.244 102.422 31.838 155.547L0.619 263.109C-0.599 267.391 -0.006 271.984 2.276 275.812C4.588 279.625 8.369 282.312 12.744 283.219L89.588 299.234C90.682 299.469 91.776 299.578 92.838 299.578C99.838 299.578 106.182 294.984 108.213 288.031L161.713 103.641C162.901 99.578 162.401 95.188 160.369 91.469ZM81.588 264.891L36.182 255.422L62.588 164.453C67.526 147.438 78.994 132.172 94.088 122.547C104.182 116.109 115.088 112.703 125.838 112.469L81.588 264.891Z" />
        </Icon>
    </>
}
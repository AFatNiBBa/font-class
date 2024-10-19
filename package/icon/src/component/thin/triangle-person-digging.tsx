
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `triangle-person-digging` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-person-digging?s=thin triangle-person-digging}
 * @preview ![triangle-person-digging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NTQuMjk3IDMyMy4wNjJDNDUyLjQ3IDMyMC43NDUgNDUwLjM2OSAzMTkuOTQ0IDQ0OC40MDEgMzE5Ljk0NEM0NDUuMzkxIDMxOS45NDQgNDQyLjY5MSAzMjEuODE2IDQ0MS43NSAzMjNMMzg2LjQ5OCAzOTIuMDcyTDMyMCAzNDguNzAzVjI3Ny42NzJDMzIwIDI2MS4yMTkgMzEwLjE0MSAyNDYuNjQxIDI5NC44NTkgMjQwLjUzMUwyNTkuMDc4IDIyNi4yMTlDMjU0LjMxNCAyMjQuMzE2IDI0OS4zNTMgMjIzLjM5NyAyNDQuNDM3IDIyMy4zOTdDMjMxLjI2MSAyMjMuMzk3IDIxOC40IDIyOS45OTggMjEwLjQ2OCAyNDEuOTY5TDE5Mi44NzUgMjc2LjM1OUMxOTIuMjgyIDI3Ny41MiAxOTEuOTk5IDI3OC43NjQgMTkxLjk5OSAyNzkuOTkzQzE5MS45OTkgMjgyLjYyMSAxOTMuMjkzIDI4NS4xODEgMTk1LjYyNSAyODYuNzAzTDM2OS4zNDggNDAwSDM1MkMzNDkuNDg0IDQwMCAzNDcuMTA5IDQwMS4xODggMzQ1LjU5NCA0MDMuMjAzTDMyMS41OTQgNDM1LjIwM0MzMjAuNDg0IDQzNi42ODYgMzE5Ljk4NSA0MzguMzQgMzE5Ljk4NSA0MzkuOTU1QzMxOS45ODUgNDQ0LjExMSAzMjMuMjkgNDQ4IDMyOCA0NDhINTM2LjAwMUM1NDAuNzY2IDQ0OCA1NDQuMDA4IDQ0NC4wODEgNTQ0LjAwOCA0MzkuOTQ3QzU0NC4wMDggNDM4LjI3MiA1NDMuNDc2IDQzNi41NjIgNTQyLjI5OCA0MzUuMDYyTDQ1NC4yOTcgMzIzLjA2MlpNMzA0IDMzOC4yODFMMjEwLjM5IDI3Ny4yMzRMMjI0LjI1IDI1MC4wNDdDMjI4Ljc5OCAyNDMuMjE4IDIzNi40NDMgMjM5LjM3MSAyNDQuMzAyIDIzOS4zNzFDMjQ3LjI2OSAyMzkuMzcxIDI1MC4yNjcgMjM5LjkxOSAyNTMuMTQgMjQxLjA2M0wyODguOTIyIDI1NS4zNzVDMjk4LjA3OCAyNTkuMDQ3IDMwNCAyNjcuNzk3IDMwNCAyNzcuNjcyVjMzOC4yODFaTTM0NCA0MzJMMzU2IDQxNkgzODRDMzg2LjQzOCA0MTYgMzg4LjczNSA0MTQuODkxIDM5MC4yNSA0MTNMNDQ3LjkzOCAzNDAuODc1TDUxOS41NDcgNDMySDM0NFpNMjg4LjAyMyAyMjRDMzA1Ljc0NiAyMjQgMzIwLjAzOSAyMDkuNzA3IDMyMC4wMzkgMTkxLjk4NFMzMDUuNzQ2IDE1OS45NjkgMjg4LjAyMyAxNTkuOTY5UzI1Ni4wMDggMTc0LjI2MiAyNTYuMDA4IDE5MS45ODRTMjcwLjMwMSAyMjQgMjg4LjAyMyAyMjRaTTI4OC4wMjMgMTc1Ljk2OUMyOTYuODU1IDE3NS45NjkgMzA0LjAzOSAxODMuMTU0IDMwNC4wMzkgMTkxLjk4NFMyOTYuODU1IDIwOCAyODguMDIzIDIwOEMyNzkuMTkzIDIwOCAyNzIuMDA4IDIwMC44MTQgMjcyLjAwOCAxOTEuOTg0UzI3OS4xOTMgMTc1Ljk2OSAyODguMDIzIDE3NS45NjlaTTIwNC41OTMgMzIxLjQ1M0MyMDMuMTk5IDMyMC40ODIgMjAxLjYwMSAzMjAuMDIzIDIwMC4wMjEgMzIwLjAyM0MxOTYuNjQ1IDMyMC4wMjMgMTkzLjM1MyAzMjIuMTE5IDE5Mi4zMTIgMzI1Ljc5N0wxNjAuMzEyIDQzNy43OTdDMTYwLjE2OCA0MzguMyAxNjAuMDg1IDQzOC45MzcgMTYwLjA4NSA0MzkuNjQ3QzE2MC4wODUgNDQzLjAxMSAxNjEuOTUgNDQ4IDE2OCA0NDhDMTcxLjQ4NCA0NDggMTc0LjY4NyA0NDUuNzE5IDE3NS42ODcgNDQyLjIwM0wyMDQuNjA5IDM0MC45ODRMMjcyIDM4OC4xNzJWNDQwQzI3MiA0NDQuNDIyIDI3NS41NzggNDQ4IDI4MCA0NDhDMjg0LjQyMiA0NDggMjg4IDQ0NC40MjIgMjg4IDQ0MFYzODRDMjg4IDM4MS4zOTEgMjg2LjcxOSAzNzguOTM4IDI4NC41OTQgMzc3LjQ1M0wyMDQuNTkzIDMyMS40NTNaTTY0MCA0NjMuODhDNjQwIDQ1NC42ODIgNjM3LjM3MyA0NDUuNTA5IDYzMi4xNzMgNDM3LjUzMUwzNjAuMTcyIDIwLjM5OEMzNTEuMzEzIDYuNzk5IDMzNS42NTYgMCAzMjAgMFMyODguNjg3IDYuNzk5IDI3OS44MjggMjAuMzk4TDcuODI3IDQzNy41MzFDMi42MjcgNDQ1LjUwOSAwIDQ1NC42ODIgMCA0NjMuODhDMCA0ODkuNDE5IDIwLjUyOCA1MTIgNDcuOTk5IDUxMkg1OTIuMDAxQzYxOS4yNDMgNTEyIDY0MCA0ODkuNzU3IDY0MCA0NjMuODhaTTYyNC4wMDUgNDYzLjg3OUM2MjQuMDA1IDQ4MC43NzYgNjEwLjQ2NyA0OTYgNTkyLjAwMSA0OTZINDcuOTk5QzI5LjYzOCA0OTYgMTUuOTk2IDQ4MC45NSAxNS45OTYgNDYzLjg3NUMxNS45OTYgNDU3LjczMiAxNy43NTEgNDUxLjYwNiAyMS4yMyA0NDYuMjdMMjkzLjIzNCAyOS4xMzFDMjk4LjU5MiAyMC45MDggMzA4LjU5OCAxNS45OTggMzIwIDE1Ljk5OEMzMzEuNDA0IDE1Ljk5OCAzNDEuNDA4IDIwLjkwOCAzNDYuNzcgMjkuMTM3TDYxOC43NjggNDQ2LjI2OEM2MjIuMjQ5IDQ1MS42MDcgNjI0LjAwNSA0NTcuNzM1IDYyNC4wMDUgNDYzLjg3OVogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function TrianglePersonDigging(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M454.297 323.062C452.47 320.745 450.369 319.944 448.401 319.944C445.391 319.944 442.691 321.816 441.75 323L386.498 392.072L320 348.703V277.672C320 261.219 310.141 246.641 294.859 240.531L259.078 226.219C254.314 224.316 249.353 223.397 244.437 223.397C231.261 223.397 218.4 229.998 210.468 241.969L192.875 276.359C192.282 277.52 191.999 278.764 191.999 279.993C191.999 282.621 193.293 285.181 195.625 286.703L369.348 400H352C349.484 400 347.109 401.188 345.594 403.203L321.594 435.203C320.484 436.686 319.985 438.34 319.985 439.955C319.985 444.111 323.29 448 328 448H536.001C540.766 448 544.008 444.081 544.008 439.947C544.008 438.272 543.476 436.562 542.298 435.062L454.297 323.062ZM304 338.281L210.39 277.234L224.25 250.047C228.798 243.218 236.443 239.371 244.302 239.371C247.269 239.371 250.267 239.919 253.14 241.063L288.922 255.375C298.078 259.047 304 267.797 304 277.672V338.281ZM344 432L356 416H384C386.438 416 388.735 414.891 390.25 413L447.938 340.875L519.547 432H344ZM288.023 224C305.746 224 320.039 209.707 320.039 191.984S305.746 159.969 288.023 159.969S256.008 174.262 256.008 191.984S270.301 224 288.023 224ZM288.023 175.969C296.855 175.969 304.039 183.154 304.039 191.984S296.855 208 288.023 208C279.193 208 272.008 200.814 272.008 191.984S279.193 175.969 288.023 175.969ZM204.593 321.453C203.199 320.482 201.601 320.023 200.021 320.023C196.645 320.023 193.353 322.119 192.312 325.797L160.312 437.797C160.168 438.3 160.085 438.937 160.085 439.647C160.085 443.011 161.95 448 168 448C171.484 448 174.687 445.719 175.687 442.203L204.609 340.984L272 388.172V440C272 444.422 275.578 448 280 448C284.422 448 288 444.422 288 440V384C288 381.391 286.719 378.938 284.594 377.453L204.593 321.453ZM640 463.88C640 454.682 637.373 445.509 632.173 437.531L360.172 20.398C351.313 6.799 335.656 0 320 0S288.687 6.799 279.828 20.398L7.827 437.531C2.627 445.509 0 454.682 0 463.88C0 489.419 20.528 512 47.999 512H592.001C619.243 512 640 489.757 640 463.88ZM624.005 463.879C624.005 480.776 610.467 496 592.001 496H47.999C29.638 496 15.996 480.95 15.996 463.875C15.996 457.732 17.751 451.606 21.23 446.27L293.234 29.131C298.592 20.908 308.598 15.998 320 15.998C331.404 15.998 341.408 20.908 346.77 29.137L618.768 446.268C622.249 451.607 624.005 457.735 624.005 463.879Z " />
        </Icon>
    </>
}
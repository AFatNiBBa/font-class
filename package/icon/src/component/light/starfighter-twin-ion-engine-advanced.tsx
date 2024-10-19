
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `starfighter-twin-ion-engine-advanced` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter-twin-ion-engine-advanced?s=light starfighter-twin-ion-engine-advanced}
 * @preview ![starfighter-twin-ion-engine-advanced](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzQuNTMxIDExNS45NDdMNTA2LjUzMSAzLjk1M0M1MDMuNSAxLjI5NyA0OTkuNzUgMCA0OTYgMEM0OTEuNTQ3IDAgNDg3LjEyNSAxLjg0NCA0ODMuOTUzIDUuNDY5QzQ3OC4xNDEgMTIuMTA5IDQ3OC44MTMgMjIuMjE3IDQ4NS40NjkgMjguMDQ1TDYwOCAxMzUuMjZWMTk4LjE3Nkw0NTMuOTE0IDE2OC44MjhDNDI1LjM2MSAxMjUuMDU3IDM3Ni4xNTYgOTYgMzIwIDk2QzI2My44MzIgOTYgMjE0LjYyMSAxMjUuMDcgMTg2LjA3MiAxNjguODU1TDMyIDE5OC4xOTlWMTM1LjI4M0wxNTQuNTMxIDI4LjA2OEMxNjEuMTg4IDIyLjI0MiAxNjEuODU5IDEyLjEzMyAxNTYuMDQ3IDUuNDkyQzE1MC4xODggLTEuMTk1IDE0MC4wNzggLTEuODY3IDEzMy40NjkgMy45NzdMNS40NjkgMTE1Ljk3MUMxLjk4NCAxMTkuMDE4IDAgMTIzLjQwOCAwIDEyOC4wMThWMzg0LjAwNkMwIDM4OC42MTUgMS45ODQgMzkzLjAwNiA1LjQ2OSAzOTYuMDUzTDEzMy40NjkgNTA4LjA0N0MxMzYuNSA1MTAuNzAzIDE0MC4yNSA1MTIgMTQ0IDUxMkMxNDguNDUzIDUxMiAxNTIuODc1IDUxMC4xNTYgMTU2LjA0NyA1MDYuNTMxQzE2MS44NTkgNDk5Ljg5MSAxNjEuMTg3IDQ4OS43ODEgMTU0LjUzMSA0ODMuOTUzTDMyIDM3Ni43NFYzMTMuODI0TDE4Ni4wODYgMzQzLjE3MkMyMTQuNjM5IDM4Ni45NDMgMjYzLjg0NCA0MTYgMzIwIDQxNkMzNzYuMTY4IDQxNiA0MjUuMzc5IDM4Ni45MyA0NTMuOTI4IDM0My4xNDVMNjA4IDMxMy43OTlWMzc2LjcxN0w0ODUuNDY5IDQ4My45M0M0NzguODEyIDQ4OS43NTggNDc4LjE0MSA0OTkuODY3IDQ4My45NTMgNTA2LjUwOEM0ODkuODEyIDUxMy4xOTUgNDk5LjkyMiA1MTMuODY3IDUwNi41MzEgNTA4LjAyM0w2MzQuNTMxIDM5Ni4wMjdDNjM4LjAxNiAzOTIuOTggNjQwIDM4OC41OTIgNjQwIDM4My45ODJWMTI3Ljk5NEM2NDAgMTIzLjM4NSA2MzguMDE2IDExOC45OTQgNjM0LjUzMSAxMTUuOTQ3Wk0zMiAyODEuMjQ0VjIzMC43NzlMMTY5LjE4MiAyMDQuNjVDMTYzLjY1OCAyMjAuODU0IDE2MCAyMzcuOTI4IDE2MCAyNTZDMTYwIDI3NC4wOCAxNjMuNjYyIDI5MS4xNjYgMTY5LjE4OSAzMDcuMzc1TDMyIDI4MS4yNDRaTTMyMCAzODRDMjQ5LjQyIDM4NCAxOTIgMzI2LjU3OCAxOTIgMjU2QzE5MiAxODUuNDIgMjQ5LjQyIDEyOCAzMjAgMTI4UzQ0OCAxODUuNDIgNDQ4IDI1NkM0NDggMzI2LjU3OCAzOTAuNTggMzg0IDMyMCAzODRaTTYwOCAyODEuMjIxTDQ3MC44MiAzMDcuMzQ4QzQ3Ni4zNDIgMjkxLjE0NSA0ODAgMjc0LjA3IDQ4MCAyNTZDNDgwIDIzNy45MiA0NzYuMzM4IDIyMC44MzQgNDcwLjgxMSAyMDQuNjI1TDYwOCAyMzAuNzU0VjI4MS4yMjFaTTM3NC45MzQgMjIzLjY5MUwzOTkuMTg4IDE5OS40MzdDNDA1LjQzOCAxOTMuMTg3IDQwNS40MzggMTgzLjA2MiAzOTkuMTg4IDE3Ni44MTJTMzgyLjgxMiAxNzAuNTYyIDM3Ni41NjMgMTc2LjgxMkwzNTIuMzA5IDIwMS4wNjZDMzQ3LjI2IDE5OC4wODYgMzQxLjgxMSAxOTUuNzgxIDMzNiAxOTQuMjcxVjE2MEMzMzYgMTUxLjE1NiAzMjguODQ0IDE0NCAzMjAgMTQ0UzMwNCAxNTEuMTU2IDMwNCAxNjBWMTk0LjI3MUMyOTguMTg5IDE5NS43ODEgMjkyLjc0IDE5OC4wODYgMjg3LjY5MSAyMDEuMDY2TDI2My40MzggMTc2LjgxMkMyNTcuMTg4IDE3MC41NjIgMjQ3LjA2MiAxNzAuNTYyIDI0MC44MTMgMTc2LjgxMlMyMzQuNTYzIDE5My4xODggMjQwLjgxMyAxOTkuNDM3TDI2NS4wNjYgMjIzLjY5MUMyNjIuMDg2IDIyOC43NCAyNTkuNzgxIDIzNC4xODkgMjU4LjI3MSAyNDBIMjI0QzIxNS4xNTYgMjQwIDIwOCAyNDcuMTU2IDIwOCAyNTZTMjE1LjE1NiAyNzIgMjI0IDI3MkgyNTguMjcxQzI1OS43ODEgMjc3LjgxMSAyNjIuMDg2IDI4My4yNiAyNjUuMDY2IDI4OC4zMDlMMjQwLjgxMiAzMTIuNTYyQzIzNC41NjIgMzE4LjgxMiAyMzQuNTYyIDMyOC45MzggMjQwLjgxMiAzMzUuMTg3QzI0My45MzcgMzM4LjMxMiAyNDguMDMxIDMzOS44NzUgMjUyLjEyNSAzMzkuODc1UzI2MC4zMTIgMzM4LjMxMiAyNjMuNDM3IDMzNS4xODdMMjg3LjY5MSAzMTAuOTM0QzI5Mi43NCAzMTMuOTE0IDI5OC4xODkgMzE2LjIxOSAzMDQgMzE3LjcyOVYzNTJDMzA0IDM2MC44NDQgMzExLjE1NiAzNjggMzIwIDM2OFMzMzYgMzYwLjg0NCAzMzYgMzUyVjMxNy43MjlDMzQxLjgxMSAzMTYuMjE5IDM0Ny4yNiAzMTMuOTE0IDM1Mi4zMDkgMzEwLjkzNEwzNzYuNTYzIDMzNS4xODhDMzc5LjY4OCAzMzguMzEyIDM4My43ODEgMzM5Ljg3NSAzODcuODc1IDMzOS44NzVTMzk2LjA2MyAzMzguMzEzIDM5OS4xODggMzM1LjE4OEM0MDUuNDM4IDMyOC45MzggNDA1LjQzOCAzMTguODEyIDM5OS4xODggMzEyLjU2M0wzNzQuOTM0IDI4OC4zMDlDMzc3LjkxNCAyODMuMjYgMzgwLjIxOSAyNzcuODExIDM4MS43MjkgMjcySDQxNkM0MjQuODQ0IDI3MiA0MzIgMjY0Ljg0NCA0MzIgMjU2UzQyNC44NDQgMjQwIDQxNiAyNDBIMzgxLjcyOUMzODAuMjE5IDIzNC4xODkgMzc3LjkxNCAyMjguNzQgMzc0LjkzNCAyMjMuNjkxWk0zMjAgMjg4QzMwMi4zNTkgMjg4IDI4OCAyNzMuNjQxIDI4OCAyNTZTMzAyLjM1OSAyMjQgMzIwIDIyNFMzNTIgMjM4LjM1OSAzNTIgMjU2UzMzNy42NDEgMjg4IDMyMCAyODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function StarfighterTwinIonEngineAdvanced(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M634.531 115.947L506.531 3.953C503.5 1.297 499.75 0 496 0C491.547 0 487.125 1.844 483.953 5.469C478.141 12.109 478.813 22.217 485.469 28.045L608 135.26V198.176L453.914 168.828C425.361 125.057 376.156 96 320 96C263.832 96 214.621 125.07 186.072 168.855L32 198.199V135.283L154.531 28.068C161.188 22.242 161.859 12.133 156.047 5.492C150.188 -1.195 140.078 -1.867 133.469 3.977L5.469 115.971C1.984 119.018 0 123.408 0 128.018V384.006C0 388.615 1.984 393.006 5.469 396.053L133.469 508.047C136.5 510.703 140.25 512 144 512C148.453 512 152.875 510.156 156.047 506.531C161.859 499.891 161.187 489.781 154.531 483.953L32 376.74V313.824L186.086 343.172C214.639 386.943 263.844 416 320 416C376.168 416 425.379 386.93 453.928 343.145L608 313.799V376.717L485.469 483.93C478.812 489.758 478.141 499.867 483.953 506.508C489.812 513.195 499.922 513.867 506.531 508.023L634.531 396.027C638.016 392.98 640 388.592 640 383.982V127.994C640 123.385 638.016 118.994 634.531 115.947ZM32 281.244V230.779L169.182 204.65C163.658 220.854 160 237.928 160 256C160 274.08 163.662 291.166 169.189 307.375L32 281.244ZM320 384C249.42 384 192 326.578 192 256C192 185.42 249.42 128 320 128S448 185.42 448 256C448 326.578 390.58 384 320 384ZM608 281.221L470.82 307.348C476.342 291.145 480 274.07 480 256C480 237.92 476.338 220.834 470.811 204.625L608 230.754V281.221ZM374.934 223.691L399.188 199.437C405.438 193.187 405.438 183.062 399.188 176.812S382.812 170.562 376.563 176.812L352.309 201.066C347.26 198.086 341.811 195.781 336 194.271V160C336 151.156 328.844 144 320 144S304 151.156 304 160V194.271C298.189 195.781 292.74 198.086 287.691 201.066L263.438 176.812C257.188 170.562 247.062 170.562 240.813 176.812S234.563 193.188 240.813 199.437L265.066 223.691C262.086 228.74 259.781 234.189 258.271 240H224C215.156 240 208 247.156 208 256S215.156 272 224 272H258.271C259.781 277.811 262.086 283.26 265.066 288.309L240.812 312.562C234.562 318.812 234.562 328.938 240.812 335.187C243.937 338.312 248.031 339.875 252.125 339.875S260.312 338.312 263.437 335.187L287.691 310.934C292.74 313.914 298.189 316.219 304 317.729V352C304 360.844 311.156 368 320 368S336 360.844 336 352V317.729C341.811 316.219 347.26 313.914 352.309 310.934L376.563 335.188C379.688 338.312 383.781 339.875 387.875 339.875S396.063 338.313 399.188 335.188C405.438 328.938 405.438 318.812 399.188 312.563L374.934 288.309C377.914 283.26 380.219 277.811 381.729 272H416C424.844 272 432 264.844 432 256S424.844 240 416 240H381.729C380.219 234.189 377.914 228.74 374.934 223.691ZM320 288C302.359 288 288 273.641 288 256S302.359 224 320 224S352 238.359 352 256S337.641 288 320 288Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sleigh` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sleigh?s=regular sleigh}
 * @preview ![sleigh](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTIuNzUgMzUwLjc1TDYwOS42MjUgMzQ4LjI1QzU5OS4zMTMgMzQwIDU4NC4xMjUgMzQxLjY4NyA1NzUuODc1IDM1Mkw1NzUuODc1IDM1MkM1NjcuNTkxIDM2Mi4zNTUgNTY5LjI3IDM3Ny40NjYgNTc5LjYyNSAzODUuNzVMNTgyLjc1IDM4OC4yNUM1ODkuMTUgMzkzLjI4OCA1OTIuNDM1IDQwMS4xNDUgNTkxLjc5NyA0MDkuMzk2QzU5MC43ODQgNDIyLjQ4OCA1NzguNjYzIDQzMiA1NjUuNTMyIDQzMkw0NDAgNDMyVjM4NEM1MDYuMjUgMzg0IDU2MCAzMzAuMjUgNTYwIDI2NFYxNDRINTg0QzU5Ny4yIDE0NCA2MDggMTMzLjIgNjA4IDEyMFYxMjBDNjA4IDEwNi44IDU5Ny4yIDk2IDU4NCA5Nkg0MzJDNDIzLjIgOTYgNDE2IDEwMy4yIDQxNiAxMTJWMTg0QzQxNiAyNDkuMjUgMjgxLjYyNSAyMzYuMjUgMjM0Ljc1IDE0MS4zNzVDMjAxLjUgNzMuODc1IDEzNC42MjUgMzIgNjAuMjUgMzJIMjRDMTAuOCAzMiAwIDQyLjggMCA1NlY1NkMwIDY5LjIgMTAuOCA4MCAyNCA4MEgzMlYyMzJDMzIgMjk4Ljg3NSA3NS43NSAzNTUuMjUgMTM2IDM3NS41VjQzMkg1NkM0Mi44IDQzMiAzMiA0NDIuOCAzMiA0NTZWNDU2QzMyIDQ2OS4yIDQyLjggNDgwIDU2IDQ4MEg1NjRDNjAzIDQ4MCA2MzcuNzUgNDUwLjc1IDYzOS44NzUgNDExLjc1QzY0MS4yNSAzODcuODc1IDYzMS4yNSAzNjUuMzc1IDYxMi43NSAzNTAuNzVaTTgwIDIzMlY4MS4zNzVDMTI3Ljg3NSA4Ny44NzUgMTY5LjYyNSAxMTcuNzUgMTkxLjc1IDE2Mi42MjVDMjYwLjI1IDMwMS42MjUgNDY0IDMwOC4zNzUgNDY0IDE4NFYxNDRINTEyVjI2NEM1MTIgMzAzLjc1IDQ3OS43NSAzMzYgNDQwIDMzNkgxODRDMTI2Ljc1IDMzNiA4MCAyODkuMjUgODAgMjMyWk0zOTIgNDMySDE4NFYzODRIMzkyVjQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sleigh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M612.75 350.75L609.625 348.25C599.313 340 584.125 341.687 575.875 352L575.875 352C567.591 362.355 569.27 377.466 579.625 385.75L582.75 388.25C589.15 393.288 592.435 401.145 591.797 409.396C590.784 422.488 578.663 432 565.532 432L440 432V384C506.25 384 560 330.25 560 264V144H584C597.2 144 608 133.2 608 120V120C608 106.8 597.2 96 584 96H432C423.2 96 416 103.2 416 112V184C416 249.25 281.625 236.25 234.75 141.375C201.5 73.875 134.625 32 60.25 32H24C10.8 32 0 42.8 0 56V56C0 69.2 10.8 80 24 80H32V232C32 298.875 75.75 355.25 136 375.5V432H56C42.8 432 32 442.8 32 456V456C32 469.2 42.8 480 56 480H564C603 480 637.75 450.75 639.875 411.75C641.25 387.875 631.25 365.375 612.75 350.75ZM80 232V81.375C127.875 87.875 169.625 117.75 191.75 162.625C260.25 301.625 464 308.375 464 184V144H512V264C512 303.75 479.75 336 440 336H184C126.75 336 80 289.25 80 232ZM392 432H184V384H392V432Z" />
        </Icon>
    </>
}
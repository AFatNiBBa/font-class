
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-combined` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=thin ruler-combined}
 * @preview ![ruler-combined](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMzA0SDIwOFY0OEMyMDggMjEuNiAxODYuNCAwIDE2MCAwSDQ4QzIxLjYgMCAwIDIxLjYgMCA0OFY0NjRDMCA0OTAuNCAyMS42IDUxMiA0OCA1MTJINDY0QzQ5MC40IDUxMiA1MTIgNDkwLjQgNTEyIDQ2NFYzNTJDNTEyIDMyNS42IDQ5MC40IDMwNCA0NjQgMzA0Wk00OTYgNDY0QzQ5NiA0ODEuNjQ1IDQ4MS42NDUgNDk2IDQ2NCA0OTZINDhDMzAuMzU1IDQ5NiAxNiA0ODEuNjQ1IDE2IDQ2NFY0OEMxNiAzMC4zNTUgMzAuMzU1IDE2IDQ4IDE2SDE2MEMxNzcuNjQ1IDE2IDE5MiAzMC4zNTUgMTkyIDQ4VjExMkgxMDRDOTkuNTc4IDExMiA5NiAxMTUuNTk0IDk2IDEyMFM5OS41NzggMTI4IDEwNCAxMjhIMTkyVjIwOEgxMDRDOTkuNTc4IDIwOCA5NiAyMTEuNTk0IDk2IDIxNlM5OS41NzggMjI0IDEwNCAyMjRIMTkyVjMwNEgxMDRDOTkuNTc4IDMwNCA5NiAzMDcuNTk0IDk2IDMxMlM5OS41NzggMzIwIDEwNCAzMjBIMTkyVjQwOEMxOTIgNDEyLjQwNiAxOTUuNTc4IDQxNiAyMDAgNDE2UzIwOCA0MTIuNDA2IDIwOCA0MDhWMzIwSDI4OFY0MDhDMjg4IDQxMi40MDYgMjkxLjU3OCA0MTYgMjk2IDQxNlMzMDQgNDEyLjQwNiAzMDQgNDA4VjMyMEgzODRWNDA4QzM4NCA0MTIuNDA2IDM4Ny41NzggNDE2IDM5MiA0MTZTNDAwIDQxMi40MDYgNDAwIDQwOFYzMjBINDY0QzQ4MS42NDUgMzIwIDQ5NiAzMzQuMzU1IDQ5NiAzNTJWNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RulerCombined(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 304H208V48C208 21.6 186.4 0 160 0H48C21.6 0 0 21.6 0 48V464C0 490.4 21.6 512 48 512H464C490.4 512 512 490.4 512 464V352C512 325.6 490.4 304 464 304ZM496 464C496 481.645 481.645 496 464 496H48C30.355 496 16 481.645 16 464V48C16 30.355 30.355 16 48 16H160C177.645 16 192 30.355 192 48V112H104C99.578 112 96 115.594 96 120S99.578 128 104 128H192V208H104C99.578 208 96 211.594 96 216S99.578 224 104 224H192V304H104C99.578 304 96 307.594 96 312S99.578 320 104 320H192V408C192 412.406 195.578 416 200 416S208 412.406 208 408V320H288V408C288 412.406 291.578 416 296 416S304 412.406 304 408V320H384V408C384 412.406 387.578 416 392 416S400 412.406 400 408V320H464C481.645 320 496 334.355 496 352V464Z" />
        </Icon>
    </>
}
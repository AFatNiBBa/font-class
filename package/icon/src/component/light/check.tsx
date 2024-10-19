
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `check` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=light check}
 * @preview ![check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzUuMzEyIDEyMy4zMTJMMjAzLjMxMiAzOTUuMzEyQzIwMC4xODggMzk4LjQzOCAxOTYuMDk0IDQwMCAxOTIgNDAwUzE4My44MTIgMzk4LjQzOCAxODAuNjg4IDM5NS4zMTJMMzYuNjg4IDI1MS4zMTJDMzAuNDM4IDI0NS4wNjIgMzAuNDM4IDIzNC45MzcgMzYuNjg4IDIyOC42ODhTNTMuMDYzIDIyMi40MzggNTkuMzEyIDIyOC42ODhMMTkyIDM2MS4zNzVMNDUyLjY4NyAxMDAuNjg4QzQ1OC45MzcgOTQuNDM4IDQ2OS4wNjMgOTQuNDM4IDQ3NS4zMTIgMTAwLjY4OFM0ODEuNTYyIDExNy4wNjIgNDc1LjMxMiAxMjMuMzEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Check(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M475.312 123.312L203.312 395.312C200.188 398.438 196.094 400 192 400S183.812 398.438 180.688 395.312L36.688 251.312C30.438 245.062 30.438 234.937 36.688 228.688S53.063 222.438 59.312 228.688L192 361.375L452.687 100.688C458.937 94.438 469.063 94.438 475.312 100.688S481.562 117.062 475.312 123.312Z" />
        </Icon>
    </>
}
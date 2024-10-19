
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `desktop` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/desktop?s=duotone desktop}
 * @preview ![desktop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyOCAwSDQ4QzIxLjUgMCAwIDIxLjUgMCA0OFYzNjhDMCAzOTQuNSAyMS41IDQxNiA0OCA0MTZINTI4QzU1NC41IDQxNiA1NzYgMzk0LjUgNTc2IDM2OFY0OEM1NzYgMjEuNSA1NTQuNSAwIDUyOCAwWk01MTIgMjg4SDY0VjY0SDUxMlYyODhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQyNCA0NjRIMzUyTDMzNiA0MTZIMjQwTDIyNCA0NjRIMTUyQzEzOC43NSA0NjQgMTI4IDQ3NC43NSAxMjggNDg4UzEzOC43NSA1MTIgMTUyIDUxMkg0MjRDNDM3LjI1IDUxMiA0NDggNTAxLjI1IDQ0OCA0ODhTNDM3LjI1IDQ2NCA0MjQgNDY0Wk02NCA2NFYyODhINTEyVjY0SDY0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Desktop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M528 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H528C554.5 416 576 394.5 576 368V48C576 21.5 554.5 0 528 0ZM512 288H64V64H512V288Z" />
            <path d="M424 464H352L336 416H240L224 464H152C138.75 464 128 474.75 128 488S138.75 512 152 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464ZM64 64V288H512V64H64Z" />
        </Icon>
    </>
}
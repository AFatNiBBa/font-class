
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `theta` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/theta?s=regular theta}
 * @preview ![theta](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMTZDOTQuNzk5IDE2IDE2IDEyMy40NTEgMTYgMjU2Uzk0Ljc5OSA0OTYgMTkyIDQ5NkMyODkuMjAzIDQ5NiAzNjggMzg4LjU0OSAzNjggMjU2UzI4OS4yMDMgMTYgMTkyIDE2Wk0xOTIgNjRDMjU1Ljk2NSA2NCAzMTAuNjYgMTM4Ljc3OSAzMTguODMgMjMySDY1LjE3QzczLjM0IDEzOC43NzkgMTI4LjAzNSA2NCAxOTIgNjRaTTE5MiA0NDhDMTI4LjAzNSA0NDggNzMuMzQgMzczLjIyMSA2NS4xNyAyODBIMzE4LjgzQzMxMC42NiAzNzMuMjIxIDI1NS45NjUgNDQ4IDE5MiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Theta(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 16C94.799 16 16 123.451 16 256S94.799 496 192 496C289.203 496 368 388.549 368 256S289.203 16 192 16ZM192 64C255.965 64 310.66 138.779 318.83 232H65.17C73.34 138.779 128.035 64 192 64ZM192 448C128.035 448 73.34 373.221 65.17 280H318.83C310.66 373.221 255.965 448 192 448Z" />
        </Icon>
    </>
}
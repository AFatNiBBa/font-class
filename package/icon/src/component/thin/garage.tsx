
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `garage` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/garage?s=thin garage}
 * @preview ![garage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzYgNDE2LjUxM0gyNjRDMjU5LjU5NCA0MTYuNTEzIDI1NiA0MjAuMTA3IDI1NiA0MjQuNTEzUzI1OS41OTQgNDMyLjUxMyAyNjQgNDMyLjUxM0gzNzZDMzgwLjQwNiA0MzIuNTEzIDM4NCA0MjguOTE5IDM4NCA0MjQuNTEzUzM4MC40MDYgNDE2LjUxMyAzNzYgNDE2LjUxM1pNNjE0LjM3NSAxMTMuMTZMMzIyLjg3NSAxLjAzMUMzMjEgMC4zNDQgMzE5IDAuMzQ0IDMxNy4xMjUgMS4wMzFMMjUuNjI1IDExMy4xNkMxMC4zMTIgMTE5LjA2NiAwIDEzNC4wNjcgMCAxNTAuNDczVjUwNC41MTVDMCA1MDguOTIyIDMuNTk0IDUxMi41MTYgOCA1MTIuNTE2UzE2IDUwOC45MjIgMTYgNTA0LjUxNVYxNTAuNDczQzE2IDE0MC42MjkgMjIuMTg4IDEzMS42MjkgMzEuMzc1IDEyOC4wOThMMzIwIDE3LjA2M0w2MDguNjI1IDEyOC4wOThDNjE3LjgxMiAxMzEuNjI5IDYyNCAxNDAuNjI5IDYyNCAxNTAuNDczVjUwNC41MTVDNjI0IDUwOC45MjIgNjI3LjU5NCA1MTIuNTE2IDYzMiA1MTIuNTE2UzY0MCA1MDguOTIyIDY0MCA1MDQuNTE1VjE1MC40NzNDNjQwIDEzNC4wNjcgNjI5LjY4NyAxMTkuMDY2IDYxNC4zNzUgMTEzLjE2Wk01MjAgMTkyLjUwNkgxMjBDMTA2Ljc4MSAxOTIuNTA2IDk2IDIwMy4yODcgOTYgMjE2LjUwN1Y1MDQuNTE1Qzk2IDUwOC45MjIgOTkuNTk0IDUxMi41MTYgMTA0IDUxMi41MTZTMTEyIDUwOC45MjIgMTEyIDUwNC41MTVWMzM2LjUxSDUyOFY1MDQuNTE1QzUyOCA1MDguOTIyIDUzMS41OTQgNTEyLjUxNiA1MzYgNTEyLjUxNlM1NDQgNTA4LjkyMiA1NDQgNTA0LjUxNVYyMTYuNTA3QzU0NCAyMDMuMjg3IDUzMy4yMTkgMTkyLjUwNiA1MjAgMTkyLjUwNlpNNTI4IDMyMC41MUgxMTJWMjE2LjUwN0MxMTIgMjEyLjEgMTE1LjU5NCAyMDguNTA2IDEyMCAyMDguNTA2SDUyMEM1MjQuNDA2IDIwOC41MDYgNTI4IDIxMi4xIDUyOCAyMTYuNTA3VjMyMC41MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Garage(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M376 416.513H264C259.594 416.513 256 420.107 256 424.513S259.594 432.513 264 432.513H376C380.406 432.513 384 428.919 384 424.513S380.406 416.513 376 416.513ZM614.375 113.16L322.875 1.031C321 0.344 319 0.344 317.125 1.031L25.625 113.16C10.312 119.066 0 134.067 0 150.473V504.515C0 508.922 3.594 512.516 8 512.516S16 508.922 16 504.515V150.473C16 140.629 22.188 131.629 31.375 128.098L320 17.063L608.625 128.098C617.812 131.629 624 140.629 624 150.473V504.515C624 508.922 627.594 512.516 632 512.516S640 508.922 640 504.515V150.473C640 134.067 629.687 119.066 614.375 113.16ZM520 192.506H120C106.781 192.506 96 203.287 96 216.507V504.515C96 508.922 99.594 512.516 104 512.516S112 508.922 112 504.515V336.51H528V504.515C528 508.922 531.594 512.516 536 512.516S544 508.922 544 504.515V216.507C544 203.287 533.219 192.506 520 192.506ZM528 320.51H112V216.507C112 212.1 115.594 208.506 120 208.506H520C524.406 208.506 528 212.1 528 216.507V320.51Z" />
        </Icon>
    </>
}
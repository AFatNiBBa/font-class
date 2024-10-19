
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tree` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree?s=solid tree}
 * @preview ![tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTMuODQ4IDQ0Ny45OTZIMjU2LjAyMVY0ODBDMjU2LjAyMSA0OTcuNjczIDI0MS42OTQgNTEyIDIyNC4wMjEgNTEySDIyNC4wMjFDMjA2LjM0OSA1MTIgMTkyLjAyMyA0OTcuNjc0IDE5Mi4wMjMgNDgwLjAwMlY0NDcuOTk2SDMzLjEyM0M0LjYyNCA0NDcuOTk2IC0xMC41NjMgNDEzLjQ5NCA4LjQzNiAzOTEuNTg2TDc3LjQxNCAzMTEuOTg4SDYyLjIxNkMzNi44MDkgMzExLjk4OCAyMy4wNjUgMjgyLjIyMyAzOS41NDIgMjYyLjg4M0w5OS45NDkgMTkxLjk4SDg5LjIxNUM2Ny45MzQgMTkxLjk4IDU2LjM0MSAxNjkuNDc5IDY5LjkzNCAxNTQuNjY2TDIwNC43MDQgOC4xNjNDMjE1LjEgLTMuMTM3IDIzMi45MzQgLTMuMTQxIDI0My4zMzQgOC4xNTdMMzc4LjIwNCAxNTQuNjY2QzM5MS44MjggMTY5LjQ3OSAzODAuMjA0IDE5MS45OCAzNTguOTIzIDE5MS45OEgzNDguMTU4TDQwOC41MTMgMjYyLjg5NEM0MjQuOTc1IDI4Mi4yMzcgNDExLjIyOSAzMTEuOTg4IDM4NS44MjkgMzExLjk4OEgzNzAuNjNMNDM5LjYwOCAzOTEuNTg2QzQ1OC43MzYgNDEzLjY2IDQ0My4wNTcgNDQ3Ljk5NiA0MTMuODQ4IDQ0Ny45OTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Tree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M413.848 447.996H256.021V480C256.021 497.673 241.694 512 224.021 512H224.021C206.349 512 192.023 497.674 192.023 480.002V447.996H33.123C4.624 447.996 -10.563 413.494 8.436 391.586L77.414 311.988H62.216C36.809 311.988 23.065 282.223 39.542 262.883L99.949 191.98H89.215C67.934 191.98 56.341 169.479 69.934 154.666L204.704 8.163C215.1 -3.137 232.934 -3.141 243.334 8.157L378.204 154.666C391.828 169.479 380.204 191.98 358.923 191.98H348.158L408.513 262.894C424.975 282.237 411.229 311.988 385.829 311.988H370.63L439.608 391.586C458.736 413.66 443.057 447.996 413.848 447.996Z" />
        </Icon>
    </>
}
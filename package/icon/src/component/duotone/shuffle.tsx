
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shuffle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shuffle?s=duotone shuffle}
 * @preview ![shuffle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwNC45NjEgMzY2Ljk1M0w0MjQuOTY3IDI4Ni45ODRDNDA5LjgzNiAyNzEuODU5IDM4My45NzEgMjgyLjU3OCAzODMuOTcxIDMwMy45NjlWMzQ0SDM0MEwyNzMuOTk5IDI1NkwyMjQgMzIyLjY2NEwyODggNDA4QzI5NS41NjIgNDE4LjA2MiAzMDcuNDA2IDQyNCAzMjAgNDI0SDM4My45NjlWNDYzLjkzOEMzODMuOTY5IDQ4NS4zMjggNDA5LjgzIDQ5Ni4wNDcgNDI0Ljk1OSA0ODAuOTIyTDUwNC45NTkgNDAwLjk0NUM1MTQuMzQ2IDM5MS41NjIgNTE0LjM0OCAzNzYuMzQ0IDUwNC45NjEgMzY2Ljk1M1pNMTYwIDEwNEMxNTIuNDM4IDkzLjkzOCAxNDAuNTk0IDg4IDEyOCA4OEg0MEMxNy45MDYgODggMCAxMDUuOTA2IDAgMTI4UzE3LjkwNiAxNjggNDAgMTY4SDEwOEwxNzMuOTk5IDI1NkwyMjQgMTg5LjMzMkwxNjAgMTA0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zODMuOTcxIDE2OFYyMDguMDMxQzM4My45NzEgMjI5LjQyMiA0MDkuODM2IDI0MC4xNDEgNDI0Ljk2NyAyMjUuMDE2TDUwNC45NjEgMTQ1LjA0N0M1MTQuMzQ4IDEzNS42NTYgNTE0LjM0NiAxMjAuNDM4IDUwNC45NTkgMTExLjA1NUw0MjQuOTU5IDMxLjA3OEM0MDkuODMgMTUuOTUzIDM4My45NjkgMjYuNjcyIDM4My45NjkgNDguMDYyVjg4SDMyMEMzMDcuNDA2IDg4IDI5NS41NjIgOTMuOTM4IDI4OCAxMDRMMTA4IDM0NEg0MEMxNy45MDYgMzQ0IDAgMzYxLjkwNiAwIDM4NFMxNy45MDYgNDI0IDQwIDQyNEgxMjhDMTQwLjU5NCA0MjQgMTUyLjQzOCA0MTguMDYyIDE2MCA0MDhMMzQwIDE2OEgzODMuOTcxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Shuffle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M504.961 366.953L424.967 286.984C409.836 271.859 383.971 282.578 383.971 303.969V344H340L273.999 256L224 322.664L288 408C295.562 418.062 307.406 424 320 424H383.969V463.938C383.969 485.328 409.83 496.047 424.959 480.922L504.959 400.945C514.346 391.562 514.348 376.344 504.961 366.953ZM160 104C152.438 93.938 140.594 88 128 88H40C17.906 88 0 105.906 0 128S17.906 168 40 168H108L173.999 256L224 189.332L160 104Z" />
            <path d="M383.971 168V208.031C383.971 229.422 409.836 240.141 424.967 225.016L504.961 145.047C514.348 135.656 514.346 120.438 504.959 111.055L424.959 31.078C409.83 15.953 383.969 26.672 383.969 48.062V88H320C307.406 88 295.562 93.938 288 104L108 344H40C17.906 344 0 361.906 0 384S17.906 424 40 424H128C140.594 424 152.438 418.062 160 408L340 168H383.971Z" />
        </Icon>
    </>
}
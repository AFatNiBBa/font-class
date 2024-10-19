
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shuffle` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shuffle?s=solid shuffle}
 * @preview ![shuffle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODMuOTcxIDE2OFYyMDguMDMxQzM4My45NzEgMjI5LjQyMiA0MDkuODM2IDI0MC4xNDEgNDI0Ljk2NyAyMjUuMDE2TDUwNC45NjEgMTQ1LjA0N0M1MTQuMzQ4IDEzNS42NTYgNTE0LjM0NiAxMjAuNDM4IDUwNC45NTkgMTExLjA1NUw0MjQuOTU5IDMxLjA3OEM0MDkuODMgMTUuOTUzIDM4My45NjkgMjYuNjcyIDM4My45NjkgNDguMDYyVjg4SDMyMEMzMDcuNDA2IDg4IDI5NS41NjIgOTMuOTM4IDI4OCAxMDRMMTA4IDM0NEg0MEMxNy45MDYgMzQ0IDAgMzYxLjkwNiAwIDM4NFMxNy45MDYgNDI0IDQwIDQyNEgxMjhDMTQwLjU5NCA0MjQgMTUyLjQzOCA0MTguMDYyIDE2MCA0MDhMMzQwIDE2OEgzODMuOTcxWk00MjQuOTY3IDI4Ni45ODRDNDA5LjgzNiAyNzEuODU5IDM4My45NzEgMjgyLjU3NCAzODMuOTcxIDMwMy45NjlWMzQ0SDM0MEwyOTMuOTk4IDI4Mi42NjRMMjQzLjk5NCAzNDkuMzI4TDI4OCA0MDhDMjk1LjU2MiA0MTguMDYyIDMwNy40MDYgNDI0IDMyMCA0MjRIMzgzLjk2OVY0NjMuOTM4QzM4My45NjkgNDg1LjMyOCA0MDkuODMgNDk2LjA0MyA0MjQuOTU5IDQ4MC45MjJMNTA0Ljk1OSA0MDAuOTQ1QzUxNC4zNDYgMzkxLjU1OSA1MTQuMzQ2IDM3Ni4zNCA1MDQuOTU5IDM2Ni45NTNMNDI0Ljk2NyAyODYuOTg0Wk00MCAxNjhIMTA4TDE1NC4wMDIgMjI5LjMzNkwyMDQuMDA2IDE2Mi42NzJMMTYwIDEwNEMxNTIuNDM4IDkzLjkzOCAxNDAuNTk0IDg4IDEyOCA4OEg0MEMxNy45MDYgODggMCAxMDUuOTA2IDAgMTI4UzE3LjkwNiAxNjggNDAgMTY4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Shuffle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M383.971 168V208.031C383.971 229.422 409.836 240.141 424.967 225.016L504.961 145.047C514.348 135.656 514.346 120.438 504.959 111.055L424.959 31.078C409.83 15.953 383.969 26.672 383.969 48.062V88H320C307.406 88 295.562 93.938 288 104L108 344H40C17.906 344 0 361.906 0 384S17.906 424 40 424H128C140.594 424 152.438 418.062 160 408L340 168H383.971ZM424.967 286.984C409.836 271.859 383.971 282.574 383.971 303.969V344H340L293.998 282.664L243.994 349.328L288 408C295.562 418.062 307.406 424 320 424H383.969V463.938C383.969 485.328 409.83 496.043 424.959 480.922L504.959 400.945C514.346 391.559 514.346 376.34 504.959 366.953L424.967 286.984ZM40 168H108L154.002 229.336L204.006 162.672L160 104C152.438 93.938 140.594 88 128 88H40C17.906 88 0 105.906 0 128S17.906 168 40 168Z" />
        </Icon>
    </>
}
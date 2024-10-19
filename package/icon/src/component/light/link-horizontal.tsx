
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `link-horizontal` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal?s=light link-horizontal}
 * @preview ![link-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMTkySDQ4MEM0NzEuMTU2IDE5MiA0NjQgMTk5LjE1NiA0NjQgMjA4UzQ3MS4xNTYgMjI0IDQ4MCAyMjRINTEyQzU2NC45MzggMjI0IDYwOCAyNjcuMDYyIDYwOCAzMjBTNTY0LjkzOCA0MTYgNTEyIDQxNkgzMzZDMjgzLjA2MiA0MTYgMjQwIDM3Mi45MzggMjQwIDMyMFMyODMuMDYyIDIyNCAzMzYgMjI0SDM1MkMzNjAuODQ0IDIyNCAzNjggMjE2Ljg0NCAzNjggMjA4UzM2MC44NDQgMTkyIDM1MiAxOTJIMzM2QzI2NS40MDYgMTkyIDIwOCAyNDkuNDIyIDIwOCAzMjBTMjY1LjQwNiA0NDggMzM2IDQ0OEg1MTJDNTgyLjU5NCA0NDggNjQwIDM5MC41NzggNjQwIDMyMFM1ODIuNTk0IDE5MiA1MTIgMTkyWk0xNjAgMjg4SDEyOEM3NS4wNjIgMjg4IDMyIDI0NC45MzggMzIgMTkyUzc1LjA2MiA5NiAxMjggOTZIMzA0QzM1Ni45MzggOTYgNDAwIDEzOS4wNjIgNDAwIDE5MlMzNTYuOTM4IDI4OCAzMDQgMjg4SDI4OEMyNzkuMTU2IDI4OCAyNzIgMjk1LjE1NiAyNzIgMzA0UzI3OS4xNTYgMzIwIDI4OCAzMjBIMzA0QzM3NC41OTQgMzIwIDQzMiAyNjIuNTc4IDQzMiAxOTJTMzc0LjU5NCA2NCAzMDQgNjRIMTI4QzU3LjQwNiA2NCAwIDEyMS40MjIgMCAxOTJTNTcuNDA2IDMyMCAxMjggMzIwSDE2MEMxNjguODQ0IDMyMCAxNzYgMzEyLjg0NCAxNzYgMzA0UzE2OC44NDQgMjg4IDE2MCAyODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LinkHorizontal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M512 192H480C471.156 192 464 199.156 464 208S471.156 224 480 224H512C564.938 224 608 267.062 608 320S564.938 416 512 416H336C283.062 416 240 372.938 240 320S283.062 224 336 224H352C360.844 224 368 216.844 368 208S360.844 192 352 192H336C265.406 192 208 249.422 208 320S265.406 448 336 448H512C582.594 448 640 390.578 640 320S582.594 192 512 192ZM160 288H128C75.062 288 32 244.938 32 192S75.062 96 128 96H304C356.938 96 400 139.062 400 192S356.938 288 304 288H288C279.156 288 272 295.156 272 304S279.156 320 288 320H304C374.594 320 432 262.578 432 192S374.594 64 304 64H128C57.406 64 0 121.422 0 192S57.406 320 128 320H160C168.844 320 176 312.844 176 304S168.844 288 160 288Z" />
        </Icon>
    </>
}
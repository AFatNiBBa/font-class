
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-trash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=solid circle-trash}
 * @preview ![circle-trash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM0MS40MDYgMzYxLjVDMzQwLjYyNSAzNzMuOTIyIDMyOS44OTEgMzg0IDMxNy40NTMgMzg0SDE5NC41NDdDMTgyLjEwOSAzODQgMTcxLjM3NSAzNzMuOTIyIDE3MC41OTQgMzYxLjVMMTYwIDE5MkgzNTJMMzQxLjQwNiAzNjEuNVpNMzUyIDE2MEgxNjBDMTUxLjE2NCAxNjAgMTQ0IDE1Mi44MzYgMTQ0IDE0NEMxNDQgMTM1LjE2MiAxNTEuMTY0IDEyOCAxNjAgMTI4SDIwOEwyMTMuNzg5IDExNi40MjJDMjE1LjE0NSAxMTMuNzExIDIxNy45MTQgMTEyIDIyMC45NDMgMTEySDI5MS4wNTdDMjk0LjA4NiAxMTIgMjk2Ljg1NyAxMTMuNzExIDI5OC4yMTEgMTE2LjQyMkwzMDQgMTI4SDM1MkMzNjAuODM4IDEyOCAzNjggMTM1LjE2MiAzNjggMTQ0QzM2OCAxNTIuODM2IDM2MC44MzggMTYwIDM1MiAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleTrash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM341.406 361.5C340.625 373.922 329.891 384 317.453 384H194.547C182.109 384 171.375 373.922 170.594 361.5L160 192H352L341.406 361.5ZM352 160H160C151.164 160 144 152.836 144 144C144 135.162 151.164 128 160 128H208L213.789 116.422C215.145 113.711 217.914 112 220.943 112H291.057C294.086 112 296.857 113.711 298.211 116.422L304 128H352C360.838 128 368 135.162 368 144C368 152.836 360.838 160 352 160Z" />
        </Icon>
    </>
}
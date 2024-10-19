
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-crown` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=duotone user-crown}
 * @preview ![user-crown](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxMjhsMzIgMCAxNiAwIDE2MCAwIDE2IDAgMzIgMGMwIDcwLjctNTcuMyAxMjgtMTI4IDEyOHMtMTI4LTU3LjMtMTI4LTEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiA4MGwwIDQ4LTMyIDAtMTYgMC0xNjAgMC0xNiAwLTMyIDAgMC00OCAwLTM3LjdjMCAwIDAtLjEgMC0uMUw5NiAzOWwwLTIzYzAtOC44IDcuMi0xNiAxNi0xNmwyLjQgMGMzLjYgMCA3LjIgMS4yIDEwIDMuNUwxNDAgMTZsMyAyLjRjLjMgLjIgLjYgLjQgLjggLjZsLjEgLjFjMTAuMiA3LjUgMjMuOCA4LjMgMzQuOSAyTDIwOS4xIDRjNC42LTIuNiA5LjctNCAxNC45LTRzMTAuNCAxLjQgMTQuOSA0bDMwLjIgMTcuMmMxMSA2LjMgMjQuNyA1LjUgMzQuOS0ybC4xLS4xYy4zLS4yIC42LS40IC44LS42bDMtMi40TDMyMy42IDMuNWMyLjgtMi4zIDYuNC0zLjUgMTAtMy41TDMzNiAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDIzIDAgMy4yYzAgMCAwIC4xIDAgLjFMMzUyIDgwek0wIDQ3MmMwLTkyLjggNzUuMi0xNjggMTY4LTE2OGwxMTIgMGM5Mi44IDAgMTY4IDc1LjIgMTY4IDE2OGwwIDhjMCAxNy43LTE0LjMgMzItMzIgMzJMMzIgNTEyYy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTh6Ii8+PC9zdmc+|width=32|height=32)
 */
const UserCrown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128l32 0 16 0 160 0 16 0 32 0c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
            <path d="M352 80l0 48-32 0-16 0-160 0-16 0-32 0 0-48 0-37.7c0 0 0-.1 0-.1L96 39l0-23c0-8.8 7.2-16 16-16l2.4 0c3.6 0 7.2 1.2 10 3.5L140 16l3 2.4c.3 .2 .6 .4 .8 .6l.1 .1c10.2 7.5 23.8 8.3 34.9 2L209.1 4c4.6-2.6 9.7-4 14.9-4s10.4 1.4 14.9 4l30.2 17.2c11 6.3 24.7 5.5 34.9-2l.1-.1c.3-.2 .6-.4 .8-.6l3-2.4L323.6 3.5c2.8-2.3 6.4-3.5 10-3.5L336 0c8.8 0 16 7.2 16 16l0 23 0 3.2c0 0 0 .1 0 .1L352 80zM0 472c0-92.8 75.2-168 168-168l112 0c92.8 0 168 75.2 168 168l0 8c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-8z" />
    </Icon>
);

export default UserCrown;
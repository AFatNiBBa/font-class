
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-crown` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=sharp-duotone-solid user-crown}
 * @preview ![user-crown](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxMjhsMzIgMCAxNiAwIDE2MCAwIDE2IDAgMzIgMGMwIDcwLjctNTcuMyAxMjgtMTI4IDEyOHMtMTI4LTU3LjMtMTI4LTEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDUzLjdMOTYgMGw0OCAyNCAxNiA4TDIyNCAwbDY0IDMyIDE2LThMMzUyIDBsMCA1My43TDM1MiA4MGwwIDQ4LTMyIDAtMTYgMC0xNjAgMC0xNiAwLTMyIDAgMC00OCAwLTI2LjN6TTM4NCAzMDRsNjQgMjA4TDAgNTEyIDY0IDMwNGwzMjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const UserCrown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128l32 0 16 0 160 0 16 0 32 0c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
            <path d="M96 53.7L96 0l48 24 16 8L224 0l64 32 16-8L352 0l0 53.7L352 80l0 48-32 0-16 0-160 0-16 0-32 0 0-48 0-26.3zM384 304l64 208L0 512 64 304l320 0z" />
    </Icon>
);

export default UserCrown;
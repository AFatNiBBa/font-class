
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-user` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-user?s=duotone folder-user}
 * @preview ![folder-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NCA5NkgyNzJMMjA4IDMySDQ4QzIxLjUgMzIgMCA1My41IDAgODBWNDMyQzAgNDU4LjUgMjEuNSA0ODAgNDggNDgwSDQ2NEM0OTAuNSA0ODAgNTEyIDQ1OC41IDUxMiA0MzJWMTQ0QzUxMiAxMTcuNSA0OTAuNSA5NiA0NjQgOTZaTTI1NiAxOTJDMjkxLjM0NiAxOTIgMzIwIDIyMC42NTYgMzIwIDI1NlMyOTEuMzQ2IDMyMCAyNTYgMzIwUzE5MiAyOTEuMzQ0IDE5MiAyNTZTMjIwLjY1NCAxOTIgMjU2IDE5MlpNMzUyIDQxNkgxNjBDMTUxLjE2NCA0MTYgMTQ0IDQwOC44MzYgMTQ0IDQwMEMxNDQgMzczLjQ5MiAxNjUuNDkgMzUyIDE5MiAzNTJIMzIwQzM0Ni41MSAzNTIgMzY4IDM3My40OTIgMzY4IDQwMEMzNjggNDA4LjgzNiAzNjAuODM2IDQxNiAzNTIgNDE2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgMzIwQzI5MS4zNDYgMzIwIDMyMCAyOTEuMzQ0IDMyMCAyNTZTMjkxLjM0NiAxOTIgMjU2IDE5MlMxOTIgMjIwLjY1NiAxOTIgMjU2UzIyMC42NTQgMzIwIDI1NiAzMjBaTTMyMCAzNTJIMTkyQzE2NS40OSAzNTIgMTQ0IDM3My40OTIgMTQ0IDQwMEMxNDQgNDA4LjgzNiAxNTEuMTY0IDQxNiAxNjAgNDE2SDM1MkMzNjAuODM2IDQxNiAzNjggNDA4LjgzNiAzNjggNDAwQzM2OCAzNzMuNDkyIDM0Ni41MSAzNTIgMzIwIDM1MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM256 192C291.346 192 320 220.656 320 256S291.346 320 256 320S192 291.344 192 256S220.654 192 256 192ZM352 416H160C151.164 416 144 408.836 144 400C144 373.492 165.49 352 192 352H320C346.51 352 368 373.492 368 400C368 408.836 360.836 416 352 416Z" />
            <path d="M256 320C291.346 320 320 291.344 320 256S291.346 192 256 192S192 220.656 192 256S220.654 320 256 320ZM320 352H192C165.49 352 144 373.492 144 400C144 408.836 151.164 416 160 416H352C360.836 416 368 408.836 368 400C368 373.492 346.51 352 320 352Z" />
    </Icon>
);

export default FolderUser;
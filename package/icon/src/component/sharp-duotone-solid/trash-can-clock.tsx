
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can-clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-clock?s=sharp-duotone-solid trash-can-clock}
 * @preview ![trash-can-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5NmwzODQgMCAwIDk2LjdjLTI5LjMgMi42LTU2LjYgMTIuNS04MCAyNy43bDAtNDQuNSAwLTE2LTMyIDAgMCAxNiAwIDcxLjJjLTI5LjggMzEuNS00OCA3NC00OCAxMjAuOGMwIDU5LjUgMjkuNiAxMTIuMSA3NC44IDE0NEwzMiA1MTIgMzIgOTZ6bTgwIDY0bDAgMTYgMCAyMjQgMCAxNiAzMiAwIDAtMTYgMC0yMjQgMC0xNi0zMiAwem05NiAwbDAgMTYgMCAyMjQgMCAxNiAzMiAwIDAtMTYgMC0yMjQgMC0xNi0zMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTQ0IDBMMzA0IDBsMTYgMzIgMTI4IDAgMCA2NEwwIDk2IDAgMzJsMTI4IDBMMTQ0IDB6TTI4OCAzNjhhMTQ0IDE0NCAwIDEgMSAyODggMCAxNDQgMTQ0IDAgMSAxIC0yODggMHptMTYwLTgwbC0zMiAwIDAgMTYgMCA2NCAwIDE2IDE2IDAgNDggMCAxNiAwIDAtMzItMTYgMC0zMiAwIDAtNDggMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const TrashCanClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 96l384 0 0 96.7c-29.3 2.6-56.6 12.5-80 27.7l0-44.5 0-16-32 0 0 16 0 71.2c-29.8 31.5-48 74-48 120.8c0 59.5 29.6 112.1 74.8 144L32 512 32 96zm80 64l0 16 0 224 0 16 32 0 0-16 0-224 0-16-32 0zm96 0l0 16 0 224 0 16 32 0 0-16 0-224 0-16-32 0z" />
            <path d="M144 0L304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16z" />
    </Icon>
);

export default TrashCanClock;
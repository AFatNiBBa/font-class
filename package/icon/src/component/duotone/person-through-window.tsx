
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-through-window` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-through-window?s=duotone person-through-window}
 * @preview ![person-through-window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxMjhhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHptMzIgMTgyLjJjMCAyNC42IDAgNDkuMiAwIDczLjhjMCAxLjEgMCAxLjQgMCAxLjdjMCAuNSAuMSAxLjEgLjEgMS42Yy4xIDEuMSAuMyAyLjEgLjUgMy4yYy40IDIuMSAxLjEgNC4xIDEuOSA2YzEuNiAzLjggNCA3LjMgNi45IDEwLjJjNS44IDUuOCAxMy44IDkuNCAyMi42IDkuNGMxNy43IDAgMzItMTQuMyAzMi0zMmMwLTI0LjYgMC00OS4yIDAtNzMuOGMwLTEwLjIgMS42LTIwLjEgNC43LTI5LjVjMjMgMzQuNCA0NS45IDY4LjkgNjguOSAxMDMuM2w0Mi43IDY0YzExLjEgMTYuNiAyMi4xIDMzLjIgMzMuMiA0OS44YzkuOCAxNC43IDI5LjcgMTguNyA0NC40IDguOXMxOC43LTI5LjcgOC45LTQ0LjRjLTMuMi00LjgtNi4zLTkuNS05LjUtMTQuMmwtNDIuNy02NGMtMTAuNy0xNi0yMS4zLTMyLTMyLTQ4bDc0LjYgMCA0MCA0OCA4My4zIDAtMy43LTQuNS03NS4yLTkwLjJjLTkuMS0xMC45LTIyLjYtMTcuMy0zNi45LTE3LjNsLTcxLjEgMC00MS02My4xYy0uMy0uNS0uNi0xLTEtMS40YzQ0LjctMjkgNzIuNS03OSA3Mi41LTEzMy42bDAtOS44Yy0yMS4zIDAtNDIuNyAwLTY0IDBsMCA5LjhjMCAzOS0yMy43IDc0LTU5LjkgODguNEMxNjcuNiAxODYuNSAxMjggMjQ1IDEyOCAzMTAuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDY0bDAgMzIwIDY0IDBjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmw3My41IDAgNDIuNyA2NEw0OCA0NDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4TDAgNDhDMCAyMS41IDIxLjUgMCA0OCAwTDU5MiAwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4bDAgMzUyYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4bC0yMDYuOSAwLTQyLjctNjRMNTc2IDM4NGwwLTMyMEwzNTIgNjRsLTY0IDBMNjQgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const PersonThroughWindow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm32 182.2c0 24.6 0 49.2 0 73.8c0 1.1 0 1.4 0 1.7c0 .5 .1 1.1 .1 1.6c.1 1.1 .3 2.1 .5 3.2c.4 2.1 1.1 4.1 1.9 6c1.6 3.8 4 7.3 6.9 10.2c5.8 5.8 13.8 9.4 22.6 9.4c17.7 0 32-14.3 32-32c0-24.6 0-49.2 0-73.8c0-10.2 1.6-20.1 4.7-29.5c23 34.4 45.9 68.9 68.9 103.3l42.7 64c11.1 16.6 22.1 33.2 33.2 49.8c9.8 14.7 29.7 18.7 44.4 8.9s18.7-29.7 8.9-44.4c-3.2-4.8-6.3-9.5-9.5-14.2l-42.7-64c-10.7-16-21.3-32-32-48l74.6 0 40 48 83.3 0-3.7-4.5-75.2-90.2c-9.1-10.9-22.6-17.3-36.9-17.3l-71.1 0-41-63.1c-.3-.5-.6-1-1-1.4c44.7-29 72.5-79 72.5-133.6l0-9.8c-21.3 0-42.7 0-64 0l0 9.8c0 39-23.7 74-59.9 88.4C167.6 186.5 128 245 128 310.2z" />
            <path d="M64 64l0 320 64 0c0 17.7 14.3 32 32 32s32-14.3 32-32l73.5 0 42.7 64L48 448c-26.5 0-48-21.5-48-48L0 48C0 21.5 21.5 0 48 0L592 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-206.9 0-42.7-64L576 384l0-320L352 64l-64 0L64 64z" />
    </Icon>
);

export default PersonThroughWindow;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `airplay` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=duotone airplay}
 * @preview ![airplay](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDMyMGMwIDUzIDQzIDk2IDk2IDk2bDguNiAwYzIuOC00LjggNi4yLTkuMiAxMC4yLTEzLjNMMTY1LjUgMzUyIDk2IDM1MmMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC0xOTJjMC0xNy43IDE0LjMtMzIgMzItMzJsMzg0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAxOTJjMCAxNy43LTE0LjMgMzItMzIgMzJsLTY5LjUgMCA1MC43IDUwLjdjNCA0IDcuNCA4LjUgMTAuMiAxMy4zbDguNiAwYzUzIDAgOTYtNDMgOTYtOTZsMC0xOTJjMC01My00My05Ni05Ni05Nkw5NiAzMkM0MyAzMiAwIDc1IDAgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzEwLjYgMjk3LjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwbC0xMjggMTI4Yy05LjIgOS4yLTExLjkgMjIuOS02LjkgMzQuOXMxNi42IDE5LjggMjkuNiAxOS44bDI1NiAwYzEyLjkgMCAyNC42LTcuOCAyOS42LTE5LjhzMi4yLTI1LjctNi45LTM0LjlsLTEyOC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Airplay: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 320c0 53 43 96 96 96l8.6 0c2.8-4.8 6.2-9.2 10.2-13.3L165.5 352 96 352c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-69.5 0 50.7 50.7c4 4 7.4 8.5 10.2 13.3l8.6 0c53 0 96-43 96-96l0-192c0-53-43-96-96-96L96 32C43 32 0 75 0 128z" />
            <path d="M310.6 297.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
    </Icon>
);

export default Airplay;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-bot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-bot?s=duotone message-bot}
 * @preview ![message-bot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA2NGMwLTM1LjMgMjguNy02NCA2NC02NEw0ODAgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDExMiAwIDMyIDAgMTQ0YzAgMzUuMy0yOC43IDY0LTY0IDY0bC0xMDYuNyAwTDI0OS42IDUwOC44Yy00LjggMy42LTExLjMgNC4yLTE2LjggMS41cy04LjgtOC4yLTguOC0xNC4zbDAtODAtNjQgMGMtMzUuMyAwLTY0LTI4LjctNjQtNjRsMC0xNDQgMC0zMkw5NiA2NHptNjQgNjRsMCAxMjhjMCAxNy43IDE0LjMgMzIgMzIgMzJsMjU2IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0xMjhjMC0xNy43LTE0LjMtMzItMzItMzJMMTkyIDk2Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTU5LjcgMjA4Yy01LjUgOS42LTE1LjkgMTYtMjcuNyAxNmMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmMxMS44IDAgMjIuMiA2LjQgMjcuNyAxNkw5NiAxNzZsMCAzMi0zNi4zIDB6TTE5MiAxOTJhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMSAtNjQgMHptMjI0LTMyYTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHptMjI0IDMyYzAgMTcuNy0xNC4zIDMyLTMyIDMyYy0xMS44IDAtMjIuMi02LjQtMjcuNy0xNkw1NDQgMjA4bDAtMzIgMzYuMyAwYzUuNS05LjYgMTUuOS0xNiAyNy43LTE2YzE3LjcgMCAzMiAxNC4zIDMyIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageBot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 64c0-35.3 28.7-64 64-64L480 0c35.3 0 64 28.7 64 64l0 112 0 32 0 144c0 35.3-28.7 64-64 64l-106.7 0L249.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-64 0c-35.3 0-64-28.7-64-64l0-144 0-32L96 64zm64 64l0 128c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L192 96c-17.7 0-32 14.3-32 32z" />
            <path d="M59.7 208c-5.5 9.6-15.9 16-27.7 16c-17.7 0-32-14.3-32-32s14.3-32 32-32c11.8 0 22.2 6.4 27.7 16L96 176l0 32-36.3 0zM192 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm224 32c0 17.7-14.3 32-32 32c-11.8 0-22.2-6.4-27.7-16L544 208l0-32 36.3 0c5.5-9.6 15.9-16 27.7-16c17.7 0 32 14.3 32 32z" />
    </Icon>
);

export default MessageBot;
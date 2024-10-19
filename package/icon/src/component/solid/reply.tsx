
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `reply` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=solid reply}
 * @preview ![reply](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04LjMwOSAxODkuODQ2TDE4NC4zMSAzNy44NDZDMTk5LjcxNiAyNC41NDkgMjIzLjk5OCAzNS4zNDYgMjIzLjk5OCA1Ni4wMThWMTM2LjA2NUMzODQuNjI0IDEzNy45MDkgNTEyIDE3MC4wOTYgNTEyIDMyMi4zMzFDNTEyIDM4My43NjggNDcyLjQwNiA0NDQuNjQzIDQyOC42NTYgNDc2LjQ1NkM0MTQuOTk5IDQ4Ni4zOTMgMzk1LjU2MiA0NzMuOTI0IDQwMC41OTMgNDU3LjgzMUM0NDUuOTM3IDMxMi44MTUgMzc5LjA5MyAyNzQuMzE1IDIyMy45OTggMjcyLjA4MVYzNjAuMDAzQzIyMy45OTggMzgwLjcwNiAxOTkuNjg1IDM5MS40NTYgMTg0LjMxIDM3OC4xNTlMOC4zMDkgMjI2LjE1OUMtMi43NTQgMjE2LjU5NiAtMi43ODUgMTk5LjQwOSA4LjMwOSAxODkuODQ2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Reply(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M8.309 189.846L184.31 37.846C199.716 24.549 223.998 35.346 223.998 56.018V136.065C384.624 137.909 512 170.096 512 322.331C512 383.768 472.406 444.643 428.656 476.456C414.999 486.393 395.562 473.924 400.593 457.831C445.937 312.815 379.093 274.315 223.998 272.081V360.003C223.998 380.706 199.685 391.456 184.31 378.159L8.309 226.159C-2.754 216.596 -2.785 199.409 8.309 189.846Z" />
        </Icon>
    </>
}
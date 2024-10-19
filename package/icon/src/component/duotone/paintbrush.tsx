
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paintbrush` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush?s=duotone paintbrush}
 * @preview ![paintbrush](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxNDMuOSAwYy4xLS4yIC4yLS4zIC4zLS4zYzIuNiAuMiA1LjIgLjMgNy45IC4zYzY2LjMgMCAxMjAtNTMuNyAxMjAtMTIwYzAtMi44LS4xLTUuNS0uMi04LjNsLS42LS42TDIwOCAyNzJjLS41IDAtMS4xIDAtMS43IDBMMTg0IDI3MmMtNjYuMyAwLTEyMCA1My43LTEyMCAxMjBjMCA2LjIgLjUgMTIuNCAxLjQgMTguNEM2OC4xIDQyOC4yIDU2LjEgNDQ4IDM4IDQ0OGwtNiAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQxMSAzMzEuNmMtMTkuOSAzMi42LTU1LjMgNTIuNC05My40IDUyLjRjLTQuOCAwLTkuNi0uMy0xNC4zLS45TDIwOCAyNzJjLjItMzUuOSAxNy44LTY5LjQgNDcuMS05MC4xTDUwMC4yIDguOEM1MTguOC00LjMgNTQ0LjEtMi42IDU2MC43IDEzczIwIDQwLjYgOC4yIDYwLjFMNDExIDMzMS42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Paintbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 480c0 17.7 14.3 32 32 32l143.9 0c.1-.2 .2-.3 .3-.3c2.6 .2 5.2 .3 7.9 .3c66.3 0 120-53.7 120-120c0-2.8-.1-5.5-.2-8.3l-.6-.6L208 272c-.5 0-1.1 0-1.7 0L184 272c-66.3 0-120 53.7-120 120c0 6.2 .5 12.4 1.4 18.4C68.1 428.2 56.1 448 38 448l-6 0c-17.7 0-32 14.3-32 32z" />
            <path d="M411 331.6c-19.9 32.6-55.3 52.4-93.4 52.4c-4.8 0-9.6-.3-14.3-.9L208 272c.2-35.9 17.8-69.4 47.1-90.1L500.2 8.8C518.8-4.3 544.1-2.6 560.7 13s20 40.6 8.2 60.1L411 331.6z" />
    </Icon>
);

export default Paintbrush;
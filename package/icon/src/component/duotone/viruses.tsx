
import { Icon, generic } from "../../index";

/**
 * A component that renders the `viruses` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/viruses?s=duotone viruses}
 * @preview ![viruses](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmMwIDEzLjMgMTAuNyAyNCAyNCAyNGwxMy41IDBjMzUuNiAwIDUzLjUgNDMuMSAyOC4zIDY4LjNsLTkuNSA5LjVjLTkuNCA5LjQtOS40IDI0LjYgMCAzMy45czI0LjYgOS40IDMzLjkgMGw5LjUtOS41YzI1LjItMjUuMiA2OC4zLTcuNCA2OC4zIDI4LjNsMCAxMy41YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjRsMC0xMy41YzAtMzUuNiA0My4xLTUzLjUgNjguMy0yOC4zbDkuNSA5LjVjOS40IDkuNCAyNC42IDkuNCAzMy45IDBzOS40LTI0LjYgMC0zMy45bC05LjUtOS41QzI5MyAyNTkuMSAzMTAuOSAyMTYgMzQ2LjUgMjE2bDEzLjUgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNHMtMTAuNy0yNC0yNC0yNGwtMTMuNSAwYy0zNS42IDAtNTMuNS00My4xLTI4LjMtNjguM2w5LjUtOS41YzkuNC05LjQgOS40LTI0LjYgMC0zMy45cy0yNC42LTkuNC0zMy45IDBsLTkuNSA5LjVDMjU5LjEgOTEgMjE2IDczLjEgMjE2IDM3LjVMMjE2IDI0YzAtMTMuMy0xMC43LTI0LTI0LTI0cy0yNCAxMC43LTI0IDI0bDAgMTMuNWMwIDM1LjYtNDMuMSA1My41LTY4LjMgMjguM2wtOS41LTkuNWMtOS40LTkuNC0yNC42LTkuNC0zMy45IDBzLTkuNCAyNC42IDAgMzMuOWw5LjUgOS41QzkxIDEyNC45IDczLjEgMTY4IDM3LjUgMTY4TDI0IDE2OGMtMTMuMyAwLTI0IDEwLjctMjQgMjR6bTE5Mi0zMmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAwem02NCA0OGExNiAxNiAwIDEgMSAtMzIgMCAxNiAxNiAwIDEgMSAzMiAwek00NDggMzUyYTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMTkyYTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHptMzUyIDQ4YzAtOC44LTcuMi0xNi0xNi0xNnMtMTYgNy4yLTE2IDE2YzAgMzMtMzkuOSA0OS41LTYzLjIgMjYuMmMtNi4yLTYuMi0xNi40LTYuMi0yMi42IDBzLTYuMiAxNi40IDAgMjIuNkM0MTcuNSAzMTIuMSA0MDEgMzUyIDM2OCAzNTJjLTguOCAwLTE2IDcuMi0xNiAxNnM3LjIgMTYgMTYgMTZjMzMgMCA0OS41IDM5LjkgMjYuMiA2My4yYy02LjIgNi4yLTYuMiAxNi40IDAgMjIuNnMxNi40IDYuMiAyMi42IDBDNDQwLjEgNDQ2LjUgNDgwIDQ2MyA0ODAgNDk2YzAgOC44IDcuMiAxNiAxNiAxNnMxNi03LjIgMTYtMTZjMC0zMyAzOS45LTQ5LjUgNjMuMi0yNi4yYzYuMiA2LjIgMTYuNCA2LjIgMjIuNiAwczYuMi0xNi40IDAtMjIuNkM1NzQuNSA0MjMuOSA1OTEgMzg0IDYyNCAzODRjOC44IDAgMTYtNy4yIDE2LTE2cy03LjItMTYtMTYtMTZjLTMzIDAtNDkuNS0zOS45LTI2LjItNjMuMmM2LjItNi4yIDYuMi0xNi40IDAtMjIuNnMtMTYuNC02LjItMjIuNiAwQzU1MS45IDI4OS41IDUxMiAyNzMgNTEyIDI0MHpNNDQ4IDM1MmEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxIC02NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Viruses: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 13.3 10.7 24 24 24l13.5 0c35.6 0 53.5 43.1 28.3 68.3l-9.5 9.5c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l9.5-9.5c25.2-25.2 68.3-7.4 68.3 28.3l0 13.5c0 13.3 10.7 24 24 24s24-10.7 24-24l0-13.5c0-35.6 43.1-53.5 68.3-28.3l9.5 9.5c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-9.5-9.5C293 259.1 310.9 216 346.5 216l13.5 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-13.5 0c-35.6 0-53.5-43.1-28.3-68.3l9.5-9.5c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-9.5 9.5C259.1 91 216 73.1 216 37.5L216 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 13.5c0 35.6-43.1 53.5-68.3 28.3l-9.5-9.5c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l9.5 9.5C91 124.9 73.1 168 37.5 168L24 168c-13.3 0-24 10.7-24 24zm192-32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64 48a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM448 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M160 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352 48c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 33-39.9 49.5-63.2 26.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6C417.5 312.1 401 352 368 352c-8.8 0-16 7.2-16 16s7.2 16 16 16c33 0 49.5 39.9 26.2 63.2c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0C440.1 446.5 480 463 480 496c0 8.8 7.2 16 16 16s16-7.2 16-16c0-33 39.9-49.5 63.2-26.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6C574.5 423.9 591 384 624 384c8.8 0 16-7.2 16-16s-7.2-16-16-16c-33 0-49.5-39.9-26.2-63.2c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0C551.9 289.5 512 273 512 240zM448 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Viruses;
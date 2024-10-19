
import { Icon } from "../../index";

/**
 * A component that renders the `hands-bubbles` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-bubbles?s=thin hands-bubbles}
 * @preview ![hands-bubbles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzkyIDY0YTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHptMC02NGE0MCA0MCAwIDEgMSAwIDgwIDQwIDQwIDAgMSAxIDAtODB6TTE2IDEzNmwwIDkwLjVDMTYgMjgzIDQ1LjkgMzM1LjMgOTQuNiAzNjRsMS40IC44Yy01LjEgMi45LTkuOCA2LjMtMTQuMyAxMC4xQzMxIDM0Mi44IDAgMjg2LjggMCAyMjYuNUwwIDEzNmMwLTIyLjEgMTcuOS00MCA0MC00MHM0MCAxNy45IDQwIDQwbDAgMjUuN0wxNjAuNCAyMi40QzE3MS41IDMuMiAxOTYtMy4zIDIxNS4xIDcuN2M3LjggNC41IDEzLjUgMTEuMiAxNi44IDE4LjlDMjQyLjkgNy41IDI2Ny40IDEgMjg2LjUgMTJzMjUuNyAzNS41IDE0LjYgNTQuNmM4LjMtMSAxNyAuNiAyNC44IDUuMWMxOS4xIDExIDI1LjcgMzUuNSAxNC42IDU0LjZsLTEuNiAyLjhjLTUgLjktMTAgMi40LTE0LjkgNC41bC04LjEgMy40IDEwLjgtMTguN2M2LjYtMTEuNSAyLjctMjYuMi04LjgtMzIuOGMtMTEuNS02LjYtMjYuMS0yLjctMzIuOCA4LjhjMCAwIDAgMCAwIDBsLTQyLjUgNzMuN2MtOS42IDQuNC0xOC43IDkuNS0yNy4zIDE1LjNsNTYtOTdjMCAwIDAgMCAwIDBsMTYtMjcuN2M2LjYtMTEuNSAyLjctMjYuMi04LjgtMzIuOHMtMjYuMi0yLjctMzIuOCA4LjhsLTE2IDI3LjdjMCAwIDAgMCAwIDBsLTY0IDExMC45Yy0yLjIgMy44LTcuMSA1LjEtMTAuOSAyLjlzLTUuMS03LjEtMi45LTEwLjlsNjQtMTEwLjhjMCAwIDAgMCAwIDBjNi42LTExLjUgMi43LTI2LjItOC44LTMyLjhzLTI2LjItMi43LTMyLjggOC44TDc4LjkgMTk1LjVjLTEuOCAzLjEtNS41IDQuNy05IDMuN3MtNS45LTQuMS01LjktNy43TDY0IDEzNmMwLTEzLjMtMTAuNy0yNC0yNC0yNHMtMjQgMTAuNy0yNCAyNHpNMzI1IDUxMmMtMzQuMSAwLTY1LjctMTAuMy05Mi0yOGMyLjEtNS4yIDMuNy0xMC41IDQuOS0xNi4xQzI2Mi40IDQ4NS42IDI5Mi41IDQ5NiAzMjUgNDk2bDE0NyAwYzEzLjMgMCAyNC0xMC43IDI0LTI0YzAtMTMuMi0xMC43LTI0LTI0LTI0YzAgMCAwIDAgMCAwbC05NiAwYy00LjQgMC04LTMuNi04LThzMy42LTggOC04bDk2IDBjMCAwIDAgMCAwIDBsMzIgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGMwLTEzLjItMTAuNy0yNC0yNC0yNGMwIDAgMCAwIDAgMGwtMTI4IDBjLTQuNCAwLTgtMy42LTgtOHMzLjYtOCA4LThsMTI4IDBjMCAwIDAgMCAwIDBsMzIgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNHMtMTAuNy0yNC0yNC0yNGwtMzIgMGMwIDAgMCAwIDAgMGwtMTI4IDBjLTQuNCAwLTgtMy42LTgtOHMzLjYtOCA4LThsMTI4IDBjMCAwIDAgMCAwIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRsLTE4My41IDBjLTMuOCAwLTcuMS0yLjctNy44LTYuNHMxLjItNy41IDQuNy05bDQ0LTE4LjVjMTIuMi01LjEgMTgtMTkuMiAxMi44LTMxLjRzLTE5LjItMTcuOS0zMS40LTEyLjhsLTc1LjUgMzEuOEMyMTEuOSAyMzIuOSAxNzYgMjg3IDE3NiAzNDdjMCAzLjYgLjEgNy4xIC40IDEwLjZjLTUuMi0xLjktMTAuNy0zLjMtMTYuMy00LjJjLS4xLTIuMS0uMS00LjItLjEtNi4zYzAtNjYuNCAzOS44LTEyNi4zIDEwMS0xNTIuMWw3NS41LTMxLjhjMjAuNC04LjYgNDMuOCAxIDUyLjQgMjEuM3MtMSA0My44LTIxLjMgNTIuNGwtNy40IDMuMUw1MDQgMjQwYzIyLjEgMCA0MCAxNy45IDQwIDQwYzAgOS0zIDE3LjMtOCAyNGMyMi4xIDAgNDAgMTcuOSA0MCA0MHMtMTcuOSA0MC00MCA0MGM1IDYuNyA4IDE1IDggMjRjMCAyMi4xLTE3LjkgNDAtNDAgNDBjNSA2LjcgOCAxNSA4IDI0YzAgMjIuMS0xNy45IDQwLTQwIDQwbC0xNDcgMHpNMTkyIDQ0OGE0OCA0OCAwIDEgMCAtOTYgMCA0OCA0OCAwIDEgMCA5NiAwek04MCA0NDhhNjQgNjQgMCAxIDEgMTI4IDBBNjQgNjQgMCAxIDEgODAgNDQ4ek01MjggMTQ0YTMyIDMyIDAgMSAwIC02NCAwIDMyIDMyIDAgMSAwIDY0IDB6bS04MCAwYTQ4IDQ4IDAgMSAxIDk2IDAgNDggNDggMCAxIDEgLTk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HandsBubbles: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M392 64a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-64a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM16 136l0 90.5C16 283 45.9 335.3 94.6 364l1.4 .8c-5.1 2.9-9.8 6.3-14.3 10.1C31 342.8 0 286.8 0 226.5L0 136c0-22.1 17.9-40 40-40s40 17.9 40 40l0 25.7L160.4 22.4C171.5 3.2 196-3.3 215.1 7.7c7.8 4.5 13.5 11.2 16.8 18.9C242.9 7.5 267.4 1 286.5 12s25.7 35.5 14.6 54.6c8.3-1 17 .6 24.8 5.1c19.1 11 25.7 35.5 14.6 54.6l-1.6 2.8c-5 .9-10 2.4-14.9 4.5l-8.1 3.4 10.8-18.7c6.6-11.5 2.7-26.2-8.8-32.8c-11.5-6.6-26.1-2.7-32.8 8.8c0 0 0 0 0 0l-42.5 73.7c-9.6 4.4-18.7 9.5-27.3 15.3l56-97c0 0 0 0 0 0l16-27.7c6.6-11.5 2.7-26.2-8.8-32.8s-26.2-2.7-32.8 8.8l-16 27.7c0 0 0 0 0 0l-64 110.9c-2.2 3.8-7.1 5.1-10.9 2.9s-5.1-7.1-2.9-10.9l64-110.8c0 0 0 0 0 0c6.6-11.5 2.7-26.2-8.8-32.8s-26.2-2.7-32.8 8.8L78.9 195.5c-1.8 3.1-5.5 4.7-9 3.7s-5.9-4.1-5.9-7.7L64 136c0-13.3-10.7-24-24-24s-24 10.7-24 24zM325 512c-34.1 0-65.7-10.3-92-28c2.1-5.2 3.7-10.5 4.9-16.1C262.4 485.6 292.5 496 325 496l147 0c13.3 0 24-10.7 24-24c0-13.2-10.7-24-24-24c0 0 0 0 0 0l-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l96 0c0 0 0 0 0 0l32 0c13.3 0 24-10.7 24-24c0-13.2-10.7-24-24-24c0 0 0 0 0 0l-128 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l128 0c0 0 0 0 0 0l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0c0 0 0 0 0 0l-128 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l128 0c0 0 0 0 0 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-183.5 0c-3.8 0-7.1-2.7-7.8-6.4s1.2-7.5 4.7-9l44-18.5c12.2-5.1 18-19.2 12.8-31.4s-19.2-17.9-31.4-12.8l-75.5 31.8C211.9 232.9 176 287 176 347c0 3.6 .1 7.1 .4 10.6c-5.2-1.9-10.7-3.3-16.3-4.2c-.1-2.1-.1-4.2-.1-6.3c0-66.4 39.8-126.3 101-152.1l75.5-31.8c20.4-8.6 43.8 1 52.4 21.3s-1 43.8-21.3 52.4l-7.4 3.1L504 240c22.1 0 40 17.9 40 40c0 9-3 17.3-8 24c22.1 0 40 17.9 40 40s-17.9 40-40 40c5 6.7 8 15 8 24c0 22.1-17.9 40-40 40c5 6.7 8 15 8 24c0 22.1-17.9 40-40 40l-147 0zM192 448a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM80 448a64 64 0 1 1 128 0A64 64 0 1 1 80 448zM528 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-80 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default HandsBubbles;
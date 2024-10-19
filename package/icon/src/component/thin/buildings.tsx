
import { Icon } from "../../index";

/**
 * A component that renders the `buildings` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/buildings?s=thin buildings}
 * @preview ![buildings](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDE2Yy0yNi41IDAtNDggMjEuNS00OCA0OGwwIDM4NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGwxOTIgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTM4NGMwLTI2LjUtMjEuNS00OC00OC00OEwyNTYgMTZ6TTE5MiA2NGMwLTM1LjMgMjguNy02NCA2NC02NEw0NDggMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDM4NGMwIDM1LjMtMjguNyA2NC02NCA2NGwtMTkyIDBjLTM1LjMgMC02NC0yOC43LTY0LTY0bDAtMzg0ek01NiAxMjhsMTA0IDAgMCAxNkw1NiAxNDRjLTIyLjEgMC00MCAxNy45LTQwIDQwbDAgMjcyYzAgMjIuMSAxNy45IDQwIDQwIDQwbDExNi44IDBjMy4zIDUuNyA3LjIgMTEuMSAxMS42IDE2TDU2IDUxMmMtMzAuOSAwLTU2LTI1LjEtNTYtNTZMMCAxODRjMC0zMC45IDI1LjEtNTYgNTYtNTZ6bTggMjE2YzAtMTMuMyAxMC43LTI0IDI0LTI0bDMyIDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCAzMmMwIDEzLjMtMTAuNyAyNC0yNCAyNGwtMzIgMGMtMTMuMyAwLTI0LTEwLjctMjQtMjRsMC0zMnptMjQtOGMtNC40IDAtOCAzLjYtOCA4bDAgMzJjMCA0LjQgMy42IDggOCA4bDMyIDBjNC40IDAgOC0zLjYgOC04bDAtMzJjMC00LjQtMy42LTgtOC04bC0zMiAwem0wLTE0NGwzMiAwYzEzLjMgMCAyNCAxMC43IDI0IDI0bDAgMzJjMCAxMy4zLTEwLjcgMjQtMjQgMjRsLTMyIDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0bDAtMzJjMC0xMy4zIDEwLjctMjQgMjQtMjR6bS04IDI0bDAgMzJjMCA0LjQgMy42IDggOCA4bDMyIDBjNC40IDAgOC0zLjYgOC04bDAtMzJjMC00LjQtMy42LTgtOC04bC0zMiAwYy00LjQgMC04IDMuNi04IDh6TTM2OCAzNzZsMC0zMmMwLTEzLjMgMTAuNy0yNCAyNC0yNGwzMiAwYzEzLjMgMCAyNCAxMC43IDI0IDI0bDAgMzJjMCAxMy4zLTEwLjcgMjQtMjQgMjRsLTMyIDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0em0yNCA4bDMyIDBjNC40IDAgOC0zLjYgOC04bDAtMzJjMC00LjQtMy42LTgtOC04bC0zMiAwYy00LjQgMC04IDMuNi04IDhsMCAzMmMwIDQuNCAzLjYgOCA4IDh6bTAtMTEyYy0xMy4zIDAtMjQtMTAuNy0yNC0yNGwwLTMyYzAtMTMuMyAxMC43LTI0IDI0LTI0bDMyIDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCAzMmMwIDEzLjMtMTAuNyAyNC0yNCAyNGwtMzIgMHptLTgtMjRjMCA0LjQgMy42IDggOCA4bDMyIDBjNC40IDAgOC0zLjYgOC04bDAtMzJjMC00LjQtMy42LTgtOC04bC0zMiAwYy00LjQgMC04IDMuNi04IDhsMCAzMnpNMjU2IDM3NmwwLTMyYzAtMTMuMyAxMC43LTI0IDI0LTI0bDMyIDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCAzMmMwIDEzLjMtMTAuNyAyNC0yNCAyNGwtMzIgMGMtMTMuMyAwLTI0LTEwLjctMjQtMjR6bTI0IDhsMzIgMGM0LjQgMCA4LTMuNiA4LThsMC0zMmMwLTQuNC0zLjYtOC04LThsLTMyIDBjLTQuNCAwLTggMy42LTggOGwwIDMyYzAgNC40IDMuNiA4IDggOHptMC0zMTJsMzIgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNGwwIDMyYzAgMTMuMy0xMC43IDI0LTI0IDI0bC0zMiAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNGwwLTMyYzAtMTMuMyAxMC43LTI0IDI0LTI0em0tOCAyNGwwIDMyYzAgNC40IDMuNiA4IDggOGwzMiAwYzQuNCAwIDgtMy42IDgtOGwwLTMyYzAtNC40LTMuNi04LTgtOGwtMzIgMGMtNC40IDAtOCAzLjYtOCA4ek0yNTYgMjQ4bDAtMzJjMC0xMy4zIDEwLjctMjQgMjQtMjRsMzIgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNGwwIDMyYzAgMTMuMy0xMC43IDI0LTI0IDI0bC0zMiAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHptMjQgOGwzMiAwYzQuNCAwIDgtMy42IDgtOGwwLTMyYzAtNC40LTMuNi04LTgtOGwtMzIgMGMtNC40IDAtOCAzLjYtOCA4bDAgMzJjMCA0LjQgMy42IDggOCA4ek0zOTIgNzJsMzIgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNGwwIDMyYzAgMTMuMy0xMC43IDI0LTI0IDI0bC0zMiAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNGwwLTMyYzAtMTMuMyAxMC43LTI0IDI0LTI0em0tOCAyNGwwIDMyYzAgNC40IDMuNiA4IDggOGwzMiAwYzQuNCAwIDgtMy42IDgtOGwwLTMyYzAtNC40LTMuNi04LTgtOGwtMzIgMGMtNC40IDAtOCAzLjYtOCA4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Buildings: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16c-26.5 0-48 21.5-48 48l0 384c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L256 16zM192 64c0-35.3 28.7-64 64-64L448 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-384zM56 128l104 0 0 16L56 144c-22.1 0-40 17.9-40 40l0 272c0 22.1 17.9 40 40 40l116.8 0c3.3 5.7 7.2 11.1 11.6 16L56 512c-30.9 0-56-25.1-56-56L0 184c0-30.9 25.1-56 56-56zm8 216c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24l0-32zm24-8c-4.4 0-8 3.6-8 8l0 32c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-32 0zm0-144l32 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24zm-8 24l0 32c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-32 0c-4.4 0-8 3.6-8 8zM368 376l0-32c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm24 8l32 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-32 0c-4.4 0-8 3.6-8 8l0 32c0 4.4 3.6 8 8 8zm0-112c-13.3 0-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-32 0zm-8-24c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-32 0c-4.4 0-8 3.6-8 8l0 32zM256 376l0-32c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm24 8l32 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-32 0c-4.4 0-8 3.6-8 8l0 32c0 4.4 3.6 8 8 8zm0-312l32 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24zm-8 24l0 32c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-32 0c-4.4 0-8 3.6-8 8zM256 248l0-32c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm24 8l32 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-32 0c-4.4 0-8 3.6-8 8l0 32c0 4.4 3.6 8 8 8zM392 72l32 0c13.3 0 24 10.7 24 24l0 32c0 13.3-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24zm-8 24l0 32c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-32 0c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default Buildings;
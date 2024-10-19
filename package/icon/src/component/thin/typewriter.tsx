
import { Icon } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=thin typewriter}
 * @preview ![typewriter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTEyIDE2Qzk0LjMgMTYgODAgMzAuMyA4MCA0OGwwIDExMi0xNiAwTDY0IDQ4QzY0IDIxLjUgODUuNSAwIDExMiAwTDM1OS40IDBjMTIuNyAwIDI0LjkgNS4xIDMzLjkgMTQuMWw0MC42IDQwLjZjOSA5IDE0LjEgMjEuMiAxNC4xIDMzLjlsMCA3MS40LTE2IDAgMC03MS40YzAtOC41LTMuNC0xNi42LTkuNC0yMi42TDM4Mi4xIDI1LjRjLTYtNi0xNC4xLTkuNC0yMi42LTkuNEwxMTIgMTZ6TTE2IDIyNGwwIDMyYzAgOC44IDcuMiAxNiAxNiAxNmw0NDggMGM4LjggMCAxNi03LjIgMTYtMTZsMC0zMmMwLTguOC03LjItMTYtMTYtMTZsLTExNC43IDBjLTQuMiAwLTguMyAxLjctMTEuMyA0LjdsLTEzLjMgMTMuM2MtOSA5LTIxLjIgMTQuMS0zMy45IDE0LjFsLTEwMS41IDBjLTEyLjcgMC0yNC45LTUuMS0zMy45LTE0LjFsLTEzLjMtMTMuM2MtMy0zLTcuMS00LjctMTEuMy00LjdMMzIgMjA4Yy04LjggMC0xNiA3LjItMTYgMTZ6bTMyNi42LTIyLjZjNi02IDE0LjEtOS40IDIyLjYtOS40TDQ4MCAxOTJjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAzMmMwIDE3LjctMTQuMyAzMi0zMiAzMmwwIDE2MGMwIDM1LjMtMjguNyA2NC02NCA2NEw5NiA1MTJjLTM1LjMgMC02NC0yOC43LTY0LTY0bDAtMTYwYy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTMyYzAtMTcuNyAxNC4zLTMyIDMyLTMybDExNC43IDBjOC41IDAgMTYuNiAzLjQgMjIuNiA5LjRsMTMuMyAxMy4zYzYgNiAxNC4xIDkuNCAyMi42IDkuNGwxMDEuNSAwYzguNSAwIDE2LjYtMy40IDIyLjYtOS40bDEzLjMtMTMuM3pNNDggMjg4bDAgMTYwYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4bDMyMCAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4bDAtMTYwTDQ4IDI4OHpNMTYwIDQ0OGwxOTIgMGM0LjQgMCA4IDMuNiA4IDhzLTMuNiA4LTggOGwtMTkyIDBjLTQuNCAwLTgtMy42LTgtOHMzLjYtOCA4LTh6TTE0NCAzMzZhMTYgMTYgMCAxIDEgLTMyIDAgMTYgMTYgMCAxIDEgMzIgMHptMTYgODBhMTYgMTYgMCAxIDEgMC0zMiAxNiAxNiAwIDEgMSAwIDMyem00OC04MGExNiAxNiAwIDEgMSAtMzIgMCAxNiAxNiAwIDEgMSAzMiAwem0xNiA4MGExNiAxNiAwIDEgMSAwLTMyIDE2IDE2IDAgMSAxIDAgMzJ6bTQ4LTgwYTE2IDE2IDAgMSAxIC0zMiAwIDE2IDE2IDAgMSAxIDMyIDB6bTE2IDgwYTE2IDE2IDAgMSAxIDAtMzIgMTYgMTYgMCAxIDEgMCAzMnptNDgtODBhMTYgMTYgMCAxIDEgLTMyIDAgMTYgMTYgMCAxIDEgMzIgMHptMTYgODBhMTYgMTYgMCAxIDEgMC0zMiAxNiAxNiAwIDEgMSAwIDMyem00OC04MGExNiAxNiAwIDEgMSAtMzIgMCAxNiAxNiAwIDEgMSAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 16C94.3 16 80 30.3 80 48l0 112-16 0L64 48C64 21.5 85.5 0 112 0L359.4 0c12.7 0 24.9 5.1 33.9 14.1l40.6 40.6c9 9 14.1 21.2 14.1 33.9l0 71.4-16 0 0-71.4c0-8.5-3.4-16.6-9.4-22.6L382.1 25.4c-6-6-14.1-9.4-22.6-9.4L112 16zM16 224l0 32c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-114.7 0c-4.2 0-8.3 1.7-11.3 4.7l-13.3 13.3c-9 9-21.2 14.1-33.9 14.1l-101.5 0c-12.7 0-24.9-5.1-33.9-14.1l-13.3-13.3c-3-3-7.1-4.7-11.3-4.7L32 208c-8.8 0-16 7.2-16 16zm326.6-22.6c6-6 14.1-9.4 22.6-9.4L480 192c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l0 160c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l114.7 0c8.5 0 16.6 3.4 22.6 9.4l13.3 13.3c6 6 14.1 9.4 22.6 9.4l101.5 0c8.5 0 16.6-3.4 22.6-9.4l13.3-13.3zM48 288l0 160c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-160L48 288zM160 448l192 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-192 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zM144 336a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm48-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm48-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm48-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm48-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
    </Icon>
);

export default Typewriter;
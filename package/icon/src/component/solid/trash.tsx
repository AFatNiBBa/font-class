
import { Icon } from "../../index";

/**
 * A component that renders the `trash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash?s=solid trash}
 * @preview ![trash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTM1LjIgMTcuN0wxMjggMzIgMzIgMzJDMTQuMyAzMiAwIDQ2LjMgMCA2NFMxNC4zIDk2IDMyIDk2bDM4NCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC05NiAwLTcuMi0xNC4zQzMwNy40IDYuOCAyOTYuMyAwIDI4NC4yIDBMMTYzLjggMGMtMTIuMSAwLTIzLjIgNi44LTI4LjYgMTcuN3pNNDE2IDEyOEwzMiAxMjggNTMuMiA0NjdjMS42IDI1LjMgMjIuNiA0NSA0Ny45IDQ1bDI0NS44IDBjMjUuMyAwIDQ2LjMtMTkuNyA0Ny45LTQ1TDQxNiAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Trash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
    </Icon>
);

export default Trash;
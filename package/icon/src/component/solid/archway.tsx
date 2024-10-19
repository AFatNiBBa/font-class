
import { Icon } from "../../index";

/**
 * A component that renders the `archway` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=solid archway}
 * @preview ![archway](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzJDMTQuMyAzMiAwIDQ2LjMgMCA2NFMxNC4zIDk2IDMyIDk2bDQ0OCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDMyIDMyem0wIDM4NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmw2NCAwIDY0IDAgMC0xMjhjMC01MyA0My05NiA5Ni05NnM5NiA0MyA5NiA5NmwwIDEyOCA2NCAwIDY0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsMC0yODhMMzIgMTI4bDAgMjg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 64 0 0-128c0-53 43-96 96-96s96 43 96 96l0 128 64 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-288L32 128l0 288z" />
    </Icon>
);

export default Archway;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `bench-tree` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bench-tree?s=duotone bench-tree}
 * @preview ![bench-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgMTc2YzAgNDQuMiAzNS44IDgwIDgwIDgwbDE2IDAgMCAyMjRjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTIyNCAxNiAwYzQ0LjIgMCA4MC0zNS44IDgwLTgwYzAtMjYuNy0xMy4xLTUwLjMtMzMuMi02NC45Yy44LTQuOSAxLjItMTAgMS4yLTE1LjFjMC01My00My05Ni05Ni05NnMtOTYgNDMtOTYgOTZjMCA1LjEgLjQgMTAuMiAxLjIgMTUuMUMzOTcuMSAxMjUuNyAzODQgMTQ5LjMgMzg0IDE3NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDE5MmwyNTYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDY0YzAgMTcuNy0xNC4zIDMyLTMyIDMyTDY0IDMyMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC02NGMwLTE3LjcgMTQuMy0zMiAzMi0zMnpNMCAzODRjMC0xNy43IDE0LjMtMzIgMzItMzJsMzIwIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsMCA2NGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTY0TDk2IDQxNmwwIDY0YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtNjRjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BenchTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 176c0 44.2 35.8 80 80 80l16 0 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224 16 0c44.2 0 80-35.8 80-80c0-26.7-13.1-50.3-33.2-64.9c.8-4.9 1.2-10 1.2-15.1c0-53-43-96-96-96s-96 43-96 96c0 5.1 .4 10.2 1.2 15.1C397.1 125.7 384 149.3 384 176z" />
            <path d="M64 192l256 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L64 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zM0 384c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64L96 416l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default BenchTree;
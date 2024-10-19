
import { Icon } from "../../index";

/**
 * A component that renders the `banjo` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banjo?s=thin banjo}
 * @preview ![banjo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDE2Yy0zIDAtNS45IDEuMi04IDMuM0wzOTMuMSA2Ni4yYy0xLjEgMS4xLTEuOSAyLjUtMi4yIDQuMWwtMTIuNyA2My41IDYzLjUtMTIuN2MxLjUtLjMgMy0xLjEgNC4xLTIuMkw0OTIuNyA3MmMyLjEtMi4xIDMuMy01IDMuMy04cy0xLjItNS45LTMuMy04TDQ1NiAxOS4zYy0yLjEtMi4xLTUtMy4zLTgtMy4zek0zNjAuNiAxNDAuMWwxNC42LTcyLjljLjktNC42IDMuMi04LjkgNi42LTEyLjNMNDI4LjcgOGM1LjEtNS4xIDEyLjEtOCAxOS4zLThzMTQuMiAyLjkgMTkuMyA4TDUwNCA0NC43YzUuMSA1LjEgOCAxMi4xIDggMTkuM3MtMi45IDE0LjItOCAxOS4zbC00Ni45IDQ2LjljLTMuNCAzLjQtNy42IDUuNi0xMi4zIDYuNmwtNzIuOSAxNC42LTc3LjMgNzcuM2MyNCAyNi41IDM5LjMgNjEuMiA0MS4yIDk5LjNsOC4yIDBjNC40IDAgOCAzLjYgOCA4cy0zLjYgOC04IDhsLTguMiAwYy0xLjkgMzguMi0xNy4xIDcyLjgtNDEuMiA5OS4zbDUuOCA1LjhjMy4xIDMuMSAzLjEgOC4yIDAgMTEuM3MtOC4yIDMuMS0xMS4zIDBsLTUuOC01LjhjLTI2LjUgMjQtNjEuMiAzOS4zLTk5LjMgNDEuMmwwIDguMmMwIDQuNC0zLjYgOC04IDhzLTgtMy42LTgtOGwwLTguMmMtMzguMi0xLjktNzIuOC0xNy4xLTk5LjMtNDEuMmwtNS44IDUuOGMtMy4xIDMuMS04LjIgMy4xLTExLjMgMHMtMy4xLTguMiAwLTExLjNsNS44LTUuOGMtMjQtMjYuNS0zOS4zLTYxLjItNDEuMi05OS4zTDggMzQ0Yy00LjQgMC04LTMuNi04LThzMy42LTggOC04bDguMiAwYzEuOS0zOC4yIDE3LjEtNzIuOCA0MS4yLTk5LjNsLTUuOC01LjhjLTMuMS0zLjEtMy4xLTguMiAwLTExLjNzOC4yLTMuMSAxMS4zIDBsNS44IDUuOGMyNi41LTI0IDYxLjItMzkuMyA5OS4zLTQxLjJsMC04LjJjMC00LjQgMy42LTggOC04czggMy42IDggOGwwIDguMmMzOC4yIDEuOSA3Mi44IDE3LjEgOTkuMyA0MS4ybDc3LjMtNzcuM3pNNzIuNCAyMzUuNUM0Ny43IDI2MSAzMi4zIDI5NS42IDMxLjcgMzMzLjhjLjIgLjcgLjMgMS40IC4zIDIuMnMtLjEgMS41LS4zIDIuMmMuNiAzOC4yIDE2IDcyLjggNDAuNyA5OC4zYy42IC40IDEuMiAuOCAxLjggMS4zczEgMS4xIDEuMyAxLjhjMjUuNSAyNC43IDYwLjEgNDAuMSA5OC4zIDQwLjdjLjctLjIgMS40LS4zIDIuMi0uM3MxLjUgLjEgMi4yIC4zYzM4LjItLjYgNzIuOC0xNiA5OC4zLTQwLjdjLjQtLjYgLjgtMS4yIDEuMy0xLjhzMS4xLTEgMS44LTEuM2MyNC43LTI1LjUgNDAuMS02MC4xIDQwLjctOTguM2MtLjItLjctLjMtMS40LS4zLTIuMnMuMS0xLjUgLjMtMi4yYy0xLjItNzgtNjQuMS0xNDEtMTQyLjEtMTQyLjFjLS43IC4yLTEuNCAuMy0yLjIgLjNzLTEuNS0uMS0yLjItLjNjLTM4LjIgLjYtNzIuOCAxNi05OC4zIDQwLjdjLS40IC42LS44IDEuMi0xLjMgMS44cy0xLjEgMS0xLjggMS4zem00NS4yIDk0LjhsNjQgNjRjMy4xIDMuMSAzLjEgOC4yIDAgMTEuM3MtOC4yIDMuMS0xMS4zIDBsLTY0LTY0Yy0zLjEtMy4xLTMuMS04LjIgMC0xMS4zczguMi0zLjEgMTEuMyAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Banjo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 16c-3 0-5.9 1.2-8 3.3L393.1 66.2c-1.1 1.1-1.9 2.5-2.2 4.1l-12.7 63.5 63.5-12.7c1.5-.3 3-1.1 4.1-2.2L492.7 72c2.1-2.1 3.3-5 3.3-8s-1.2-5.9-3.3-8L456 19.3c-2.1-2.1-5-3.3-8-3.3zM360.6 140.1l14.6-72.9c.9-4.6 3.2-8.9 6.6-12.3L428.7 8c5.1-5.1 12.1-8 19.3-8s14.2 2.9 19.3 8L504 44.7c5.1 5.1 8 12.1 8 19.3s-2.9 14.2-8 19.3l-46.9 46.9c-3.4 3.4-7.6 5.6-12.3 6.6l-72.9 14.6-77.3 77.3c24 26.5 39.3 61.2 41.2 99.3l8.2 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-8.2 0c-1.9 38.2-17.1 72.8-41.2 99.3l5.8 5.8c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-5.8-5.8c-26.5 24-61.2 39.3-99.3 41.2l0 8.2c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-8.2c-38.2-1.9-72.8-17.1-99.3-41.2l-5.8 5.8c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l5.8-5.8c-24-26.5-39.3-61.2-41.2-99.3L8 344c-4.4 0-8-3.6-8-8s3.6-8 8-8l8.2 0c1.9-38.2 17.1-72.8 41.2-99.3l-5.8-5.8c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l5.8 5.8c26.5-24 61.2-39.3 99.3-41.2l0-8.2c0-4.4 3.6-8 8-8s8 3.6 8 8l0 8.2c38.2 1.9 72.8 17.1 99.3 41.2l77.3-77.3zM72.4 235.5C47.7 261 32.3 295.6 31.7 333.8c.2 .7 .3 1.4 .3 2.2s-.1 1.5-.3 2.2c.6 38.2 16 72.8 40.7 98.3c.6 .4 1.2 .8 1.8 1.3s1 1.1 1.3 1.8c25.5 24.7 60.1 40.1 98.3 40.7c.7-.2 1.4-.3 2.2-.3s1.5 .1 2.2 .3c38.2-.6 72.8-16 98.3-40.7c.4-.6 .8-1.2 1.3-1.8s1.1-1 1.8-1.3c24.7-25.5 40.1-60.1 40.7-98.3c-.2-.7-.3-1.4-.3-2.2s.1-1.5 .3-2.2c-1.2-78-64.1-141-142.1-142.1c-.7 .2-1.4 .3-2.2 .3s-1.5-.1-2.2-.3c-38.2 .6-72.8 16-98.3 40.7c-.4 .6-.8 1.2-1.3 1.8s-1.1 1-1.8 1.3zm45.2 94.8l64 64c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-64-64c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0z" />
    </Icon>
);

export default Banjo;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-binary` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-binary?s=duotone cloud-binary}
 * @preview ![cloud-binary](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMzNmMwIDc5LjUgNjQuNSAxNDQgMTQ0IDE0NGwzNjggMGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOGMwLTYxLjktNDQtMTEzLjYtMTAyLjQtMTI1LjRjNC4xLTEwLjcgNi40LTIyLjQgNi40LTM0LjZjMC01My00My05Ni05Ni05NmMtMTkuNyAwLTM4LjEgNi01My4zIDE2LjJDMzY3IDY0LjIgMzE1LjMgMzIgMjU2IDMyQzE2Ny42IDMyIDk2IDEwMy42IDk2IDE5MmMwIDIuNyAuMSA1LjQgLjIgOC4xQzQwLjIgMjE5LjggMCAyNzMuMiAwIDMzNnpNMTYwIDIwMGMwLTIyLjEgMTcuOS00MCA0MC00MGwxNiAwYzIyLjEgMCA0MCAxNy45IDQwIDQwbDAgMzJjMCAyMi4xLTE3LjkgNDAtNDAgNDBsLTE2IDBjLTIyLjEgMC00MC0xNy45LTQwLTQwbDAtMzJ6bTE2IDEyMGMwLTguOCA3LjItMTYgMTYtMTZsMTYgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCA4MGMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTY0Yy04LjggMC0xNi03LjItMTYtMTZ6bTE2LTEyMGwwIDMyYzAgNC40IDMuNiA4IDggOGwxNiAwYzQuNCAwIDgtMy42IDgtOGwwLTMyYzAtNC40LTMuNi04LTgtOGwtMTYgMGMtNC40IDAtOCAzLjYtOCA4em04MCAxNDRjMC0yMi4xIDE3LjktNDAgNDAtNDBsMTYgMGMyMi4xIDAgNDAgMTcuOSA0MCA0MGwwIDMyYzAgMjIuMS0xNy45IDQwLTQwIDQwbC0xNiAwYy0yMi4xIDAtNDAtMTcuOS00MC00MGwwLTMyem0xNi0xNjhjMC04LjggNy4yLTE2IDE2LTE2bDE2IDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgODBjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZsMC02NGMtOC44IDAtMTYtNy4yLTE2LTE2em0xNiAxNjhsMCAzMmMwIDQuNCAzLjYgOCA4IDhsMTYgMGM0LjQgMCA4LTMuNiA4LThsMC0zMmMwLTQuNC0zLjYtOC04LThsLTE2IDBjLTQuNCAwLTggMy42LTggOHptODAtMTQ0YzAtMjIuMSAxNy45LTQwIDQwLTQwbDE2IDBjMjIuMSAwIDQwIDE3LjkgNDAgNDBsMCAzMmMwIDIyLjEtMTcuOSA0MC00MCA0MGwtMTYgMGMtMjIuMSAwLTQwLTE3LjktNDAtNDBsMC0zMnptMTYgMTIwYzAtOC44IDcuMi0xNiAxNi0xNmwxNiAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDgwYzAgOC44LTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2bDAtNjRjLTguOCAwLTE2LTcuMi0xNi0xNnptMTYtMTIwbDAgMzJjMCA0LjQgMy42IDggOCA4bDE2IDBjNC40IDAgOC0zLjYgOC04bDAtMzJjMC00LjQtMy42LTgtOC04bC0xNiAwYy00LjQgMC04IDMuNi04IDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMDAgMTYwYy0yMi4xIDAtNDAgMTcuOS00MCA0MGwwIDMyYzAgMjIuMSAxNy45IDQwIDQwIDQwbDE2IDBjMjIuMSAwIDQwLTE3LjkgNDAtNDBsMC0zMmMwLTIyLjEtMTcuOS00MC00MC00MGwtMTYgMHptLTggNDBjMC00LjQgMy42LTggOC04bDE2IDBjNC40IDAgOCAzLjYgOCA4bDAgMzJjMCA0LjQtMy42IDgtOCA4bC0xNiAwYy00LjQgMC04LTMuNi04LThsMC0zMnptMTEyLTQwYy04LjggMC0xNiA3LjItMTYgMTZzNy4yIDE2IDE2IDE2bDAgNjRjMCA4LjggNy4yIDE2IDE2IDE2czE2LTcuMiAxNi0xNmwwLTgwYzAtOC44LTcuMi0xNi0xNi0xNmwtMTYgMHptODAgNDBsMCAzMmMwIDIyLjEgMTcuOSA0MCA0MCA0MGwxNiAwYzIyLjEgMCA0MC0xNy45IDQwLTQwbDAtMzJjMC0yMi4xLTE3LjktNDAtNDAtNDBsLTE2IDBjLTIyLjEgMC00MCAxNy45LTQwIDQwem00MC04bDE2IDBjNC40IDAgOCAzLjYgOCA4bDAgMzJjMCA0LjQtMy42IDgtOCA4bC0xNiAwYy00LjQgMC04LTMuNi04LThsMC0zMmMwLTQuNCAzLjYtOCA4LTh6TTE5MiAzMDRjLTguOCAwLTE2IDcuMi0xNiAxNnM3LjIgMTYgMTYgMTZsMCA2NGMwIDguOCA3LjIgMTYgMTYgMTZzMTYtNy4yIDE2LTE2bDAtODBjMC04LjgtNy4yLTE2LTE2LTE2bC0xNiAwem0xMjAgMGMtMjIuMSAwLTQwIDE3LjktNDAgNDBsMCAzMmMwIDIyLjEgMTcuOSA0MCA0MCA0MGwxNiAwYzIyLjEgMCA0MC0xNy45IDQwLTQwbDAtMzJjMC0yMi4xLTE3LjktNDAtNDAtNDBsLTE2IDB6bS04IDQwYzAtNC40IDMuNi04IDgtOGwxNiAwYzQuNCAwIDggMy42IDggOGwwIDMyYzAgNC40LTMuNiA4LTggOGwtMTYgMGMtNC40IDAtOC0zLjYtOC04bDAtMzJ6bTk2LTI0YzAgOC44IDcuMiAxNiAxNiAxNmwwIDY0YzAgOC44IDcuMiAxNiAxNiAxNnMxNi03LjIgMTYtMTZsMC04MGMwLTguOC03LjItMTYtMTYtMTZsLTE2IDBjLTguOCAwLTE2IDcuMi0xNiAxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CloudBinary: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336zM160 200c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 32c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-32zm16 120c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c-8.8 0-16-7.2-16-16zm16-120l0 32c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8zm80 144c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 32c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-32zm16-168c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c-8.8 0-16-7.2-16-16zm16 168l0 32c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8zm80-144c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 32c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-32zm16 120c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c-8.8 0-16-7.2-16-16zm16-120l0 32c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8z" />
            <path d="M200 160c-22.1 0-40 17.9-40 40l0 32c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-32c0-22.1-17.9-40-40-40l-16 0zm-8 40c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-32zm112-40c-8.8 0-16 7.2-16 16s7.2 16 16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80c0-8.8-7.2-16-16-16l-16 0zm80 40l0 32c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-32c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40zm40-8l16 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-32c0-4.4 3.6-8 8-8zM192 304c-8.8 0-16 7.2-16 16s7.2 16 16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80c0-8.8-7.2-16-16-16l-16 0zm120 0c-22.1 0-40 17.9-40 40l0 32c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-32c0-22.1-17.9-40-40-40l-16 0zm-8 40c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-32zm96-24c0 8.8 7.2 16 16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default CloudBinary;
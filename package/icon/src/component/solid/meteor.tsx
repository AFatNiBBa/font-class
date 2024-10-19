
import { Icon } from "../../index";

/**
 * A component that renders the `meteor` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=solid meteor}
 * @preview ![meteor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTEuMzYgMjAuNzE5QzQ5OS43MzQgNTkuNDcyIDQ3Ni45ODMgMTMyLjQ3OSA0NDkuOTgzIDIwOC40ODdDNDU2Ljk4MyAyMTAuNjEyIDQ2My4zNTggMjEyLjQ4NyA0NjguNjA4IDIxNC4xMTJDNDczLjIzMyAyMTUuNDg3IDQ3Ni45ODMgMjE4Ljg2MyA0NzguNzM0IDIyMy4yMzhDNDgwLjYwOSAyMjcuNzM5IDQ4MC4zNTkgMjMyLjczOSA0NzguMTA4IDIzNi45ODlDNDU1Ljk4MyAyNzkuMjQzIDM5NS40ODEgMzg5Ljc1NCAzMzUuNjA0IDQ1MS4zODVDMzM0LjYwNCA0NTIuNTEgMzMzLjYwNCA0NTMuODg1IDMzMi42MDQgNDU0Ljg4NUMyNTYuNjAyIDUzMS4wMTcgMTMzLjIyMyA1MzEuMDE3IDU3LjA5NiA0NTUuMDFDLTE5LjAzMiAzNzguODc4IC0xOS4wMzIgMjU1LjQ5MSA1Ny4wOTYgMTc5LjM1OUM1OC4wOTYgMTc4LjM1OSA1OS40NzEgMTc3LjM1OSA2MC41OTYgMTc2LjM1OUMxMjIuMDk4IDExNi40NzggMjMyLjQ3NiA1NS45NzIgMjc0Ljk3NyAzMy44NDVDMjc5LjIyNyAzMS41OTUgMjg0LjIyNyAzMS4zNDUgMjg4LjYwMyAzMy4yMkMyOTMuMTAzIDM1LjA5NSAyOTYuNDc4IDM4Ljg0NiAyOTcuODUzIDQzLjM0NkMyOTkuNDc4IDQ4LjQ3MSAzMDEuMzUzIDU0Ljk3MiAzMDMuNDc4IDYxLjk3M0MzNzkuMzU1IDM0Ljk3IDQ1Mi4zNTggMTIuMjE4IDQ5MS4xMDkgMC43MTdDNDk2Ljg1OSAtMS4wMzMgNTAyLjk4NCAwLjQ2NyA1MDcuMjM0IDQuNzE3QzUxMS40ODUgOC44NDMgNTEyLjk4NSAxNS4wOTMgNTExLjM2IDIwLjcxOVpNMzE5Ljk3OSAzMTkuOTk3QzMxOS45NzkgMjQ5LjM2NiAyNjIuNjAyIDE5MS45ODUgMTkxLjk3NSAxOTEuOTg1QzEyMS4yMjIgMTkxLjk4NSA2My45NzEgMjQ5LjM2NiA2My45NzEgMzE5Ljk5N0M2My45NzEgMzkwLjc1NCAxMjEuMjIyIDQ0OC4wMSAxOTEuOTc1IDQ0OC4wMUMyNjIuNjAyIDQ0OC4wMSAzMTkuOTc5IDM5MC43NTQgMzE5Ljk3OSAzMTkuOTk3Wk0xOTEuOTc1IDI4Ny45OTRDMTkxLjk3NSAzMDUuNjIxIDE3Ny41OTkgMzE5Ljk5NyAxNTkuOTc0IDMxOS45OTdDMTQyLjIyMyAzMTkuOTk3IDEyNy45NzMgMzA1LjYyMSAxMjcuOTczIDI4Ny45OTRTMTQyLjIyMyAyNTUuOTkxIDE1OS45NzQgMjU1Ljk5MUMxNjguNDc0IDI1NS45OTEgMTc2LjU5OSAyNTkuMzY3IDE4Mi41OTkgMjY1LjM2N1MxOTEuOTc1IDI3OS40OTMgMTkxLjk3NSAyODcuOTk0Wk0yMjMuOTc2IDM2OC4wMDJDMjIzLjk3NiAzNzYuODc4IDIxNi43MjUgMzg0LjAwMyAyMDcuOTc1IDM4NC4wMDNDMTk5LjEgMzg0LjAwMyAxOTEuOTc1IDM3Ni44NzggMTkxLjk3NSAzNjguMDAyUzE5OS4xIDM1MiAyMDcuOTc1IDM1MkMyMTYuNzI1IDM1MiAyMjMuOTc2IDM1OS4xMjYgMjIzLjk3NiAzNjguMDAyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Meteor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M511.36 20.719C499.734 59.472 476.983 132.479 449.983 208.487C456.983 210.612 463.358 212.487 468.608 214.112C473.233 215.487 476.983 218.863 478.734 223.238C480.609 227.739 480.359 232.739 478.108 236.989C455.983 279.243 395.481 389.754 335.604 451.385C334.604 452.51 333.604 453.885 332.604 454.885C256.602 531.017 133.223 531.017 57.096 455.01C-19.032 378.878 -19.032 255.491 57.096 179.359C58.096 178.359 59.471 177.359 60.596 176.359C122.098 116.478 232.476 55.972 274.977 33.845C279.227 31.595 284.227 31.345 288.603 33.22C293.103 35.095 296.478 38.846 297.853 43.346C299.478 48.471 301.353 54.972 303.478 61.973C379.355 34.97 452.358 12.218 491.109 0.717C496.859 -1.033 502.984 0.467 507.234 4.717C511.485 8.843 512.985 15.093 511.36 20.719ZM319.979 319.997C319.979 249.366 262.602 191.985 191.975 191.985C121.222 191.985 63.971 249.366 63.971 319.997C63.971 390.754 121.222 448.01 191.975 448.01C262.602 448.01 319.979 390.754 319.979 319.997ZM191.975 287.994C191.975 305.621 177.599 319.997 159.974 319.997C142.223 319.997 127.973 305.621 127.973 287.994S142.223 255.991 159.974 255.991C168.474 255.991 176.599 259.367 182.599 265.367S191.975 279.493 191.975 287.994ZM223.976 368.002C223.976 376.878 216.725 384.003 207.975 384.003C199.1 384.003 191.975 376.878 191.975 368.002S199.1 352 207.975 352C216.725 352 223.976 359.126 223.976 368.002Z" />
    </Icon>
);

export default Meteor;

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard-down` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-down?s=duotone keyboard-down}
 * @preview ![keyboard-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAwSDY0QzI4LjY1NCAwIDAgMjguNjUyIDAgNjRWMjI0QzAgMjU5LjM0NiAyOC42NTQgMjg4IDY0IDI4OEg1MTJDNTQ3LjM0OCAyODggNTc2IDI1OS4zNDYgNTc2IDIyNFY2NEM1NzYgMjguNjUyIDU0Ny4zNDggMCA1MTIgMFpNMjU2IDc2QzI1NiA2OS4zNzUgMjYxLjM3NSA2NCAyNjggNjRIMzA4QzMxNC42MjUgNjQgMzIwIDY5LjM3NSAzMjAgNzZWMTE2QzMyMCAxMjIuNjI1IDMxNC42MjUgMTI4IDMwOCAxMjhIMjY4QzI2MS4zNzUgMTI4IDI1NiAxMjIuNjI1IDI1NiAxMTZWNzZaTTE2MCA3NkMxNjAgNjkuMzc1IDE2NS4zNzUgNjQgMTcyIDY0SDIxMkMyMTguNjI1IDY0IDIyNCA2OS4zNzUgMjI0IDc2VjExNkMyMjQgMTIyLjYyNSAyMTguNjI1IDEyOCAyMTIgMTI4SDE3MkMxNjUuMzc1IDEyOCAxNjAgMTIyLjYyNSAxNjAgMTE2Vjc2Wk0xMjggMjEyQzEyOCAyMTguNjI1IDEyMi42MjUgMjI0IDExNiAyMjRINzZDNjkuMzc1IDIyNCA2NCAyMTguNjI1IDY0IDIxMlYxNzJDNjQgMTY1LjM3NSA2OS4zNzUgMTYwIDc2IDE2MEgxMTZDMTIyLjYyNSAxNjAgMTI4IDE2NS4zNzUgMTI4IDE3MlYyMTJaTTEyOCAxMTZDMTI4IDEyMi42MjUgMTIyLjYyNSAxMjggMTE2IDEyOEg3NkM2OS4zNzUgMTI4IDY0IDEyMi42MjUgNjQgMTE2Vjc2QzY0IDY5LjM3NSA2OS4zNzUgNjQgNzYgNjRIMTE2QzEyMi42MjUgNjQgMTI4IDY5LjM3NSAxMjggNzZWMTE2Wk00MTYgMjEyQzQxNiAyMTguNjI1IDQxMC42MjUgMjI0IDQwNCAyMjRIMTcyQzE2NS4zNzUgMjI0IDE2MCAyMTguNjI1IDE2MCAyMTJWMTcyQzE2MCAxNjUuMzc1IDE2NS4zNzUgMTYwIDE3MiAxNjBINDA0QzQxMC42MjUgMTYwIDQxNiAxNjUuMzc1IDQxNiAxNzJWMjEyWk00MTYgMTE2QzQxNiAxMjIuNjI1IDQxMC42MjUgMTI4IDQwNCAxMjhIMzY0QzM1Ny4zNzUgMTI4IDM1MiAxMjIuNjI1IDM1MiAxMTZWNzZDMzUyIDY5LjM3NSAzNTcuMzc1IDY0IDM2NCA2NEg0MDRDNDEwLjYyNSA2NCA0MTYgNjkuMzc1IDQxNiA3NlYxMTZaTTUxMiAyMTJDNTEyIDIxOC42MjUgNTA2LjYyNSAyMjQgNTAwIDIyNEg0NjBDNDUzLjM3NSAyMjQgNDQ4IDIxOC42MjUgNDQ4IDIxMlYxNzJDNDQ4IDE2NS4zNzUgNDUzLjM3NSAxNjAgNDYwIDE2MEg1MDBDNTA2LjYyNSAxNjAgNTEyIDE2NS4zNzUgNTEyIDE3MlYyMTJaTTUxMiAxMTZDNTEyIDEyMi42MjUgNTA2LjYyNSAxMjggNTAwIDEyOEg0NjBDNDUzLjM3NSAxMjggNDQ4IDEyMi42MjUgNDQ4IDExNlY3NkM0NDggNjkuMzc1IDQ1My4zNzUgNjQgNDYwIDY0SDUwMEM1MDYuNjI1IDY0IDUxMiA2OS4zNzUgNTEyIDc2VjExNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjY4IDEyOEgzMDhDMzE0LjYyNSAxMjggMzIwIDEyMi42MjUgMzIwIDExNlY3NkMzMjAgNjkuMzc1IDMxNC42MjUgNjQgMzA4IDY0SDI2OEMyNjEuMzc1IDY0IDI1NiA2OS4zNzUgMjU2IDc2VjExNkMyNTYgMTIyLjYyNSAyNjEuMzc1IDEyOCAyNjggMTI4Wk0xNzIgMTI4SDIxMkMyMTguNjI1IDEyOCAyMjQgMTIyLjYyNSAyMjQgMTE2Vjc2QzIyNCA2OS4zNzUgMjE4LjYyNSA2NCAyMTIgNjRIMTcyQzE2NS4zNzUgNjQgMTYwIDY5LjM3NSAxNjAgNzZWMTE2QzE2MCAxMjIuNjI1IDE2NS4zNzUgMTI4IDE3MiAxMjhaTTExNiAxNjBINzZDNjkuMzc1IDE2MCA2NCAxNjUuMzc1IDY0IDE3MlYyMTJDNjQgMjE4LjYyNSA2OS4zNzUgMjI0IDc2IDIyNEgxMTZDMTIyLjYyNSAyMjQgMTI4IDIxOC42MjUgMTI4IDIxMlYxNzJDMTI4IDE2NS4zNzUgMTIyLjYyNSAxNjAgMTE2IDE2MFpNMTE2IDY0SDc2QzY5LjM3NSA2NCA2NCA2OS4zNzUgNjQgNzZWMTE2QzY0IDEyMi42MjUgNjkuMzc1IDEyOCA3NiAxMjhIMTE2QzEyMi42MjUgMTI4IDEyOCAxMjIuNjI1IDEyOCAxMTZWNzZDMTI4IDY5LjM3NSAxMjIuNjI1IDY0IDExNiA2NFpNNTAwIDY0SDQ2MEM0NTMuMzc1IDY0IDQ0OCA2OS4zNzUgNDQ4IDc2VjExNkM0NDggMTIyLjYyNSA0NTMuMzc1IDEyOCA0NjAgMTI4SDUwMEM1MDYuNjI1IDEyOCA1MTIgMTIyLjYyNSA1MTIgMTE2Vjc2QzUxMiA2OS4zNzUgNTA2LjYyNSA2NCA1MDAgNjRaTTUwMCAxNjBINDYwQzQ1My4zNzUgMTYwIDQ0OCAxNjUuMzc1IDQ0OCAxNzJWMjEyQzQ0OCAyMTguNjI1IDQ1My4zNzUgMjI0IDQ2MCAyMjRINTAwQzUwNi42MjUgMjI0IDUxMiAyMTguNjI1IDUxMiAyMTJWMTcyQzUxMiAxNjUuMzc1IDUwNi42MjUgMTYwIDUwMCAxNjBaTTQwNCA2NEgzNjRDMzU3LjM3NSA2NCAzNTIgNjkuMzc1IDM1MiA3NlYxMTZDMzUyIDEyMi42MjUgMzU3LjM3NSAxMjggMzY0IDEyOEg0MDRDNDEwLjYyNSAxMjggNDE2IDEyMi42MjUgNDE2IDExNlY3NkM0MTYgNjkuMzc1IDQxMC42MjUgNjQgNDA0IDY0Wk0zOTIgMzUxLjg5NUgxODRDMTc0LjQ1MSAzNTEuODk1IDE2NS44MTEgMzU3LjU1NSAxNjIgMzY2LjMxMUMxNTguMTg2IDM3NS4wNjYgMTU5LjkyIDM4NS4yNiAxNjYuNDA0IDM5Mi4yNDhMMjcwLjQwNiA1MDQuMzIyQzI3OS45MDQgNTE0LjU1OSAyOTYuMDk2IDUxNC41NTkgMzA1LjU5NCA1MDQuMzIyTDQwOS41OTYgMzkyLjI0OEM0MTYuMDggMzg1LjI2IDQxNy44MTQgMzc1LjA2NiA0MTQuMDA0IDM2Ni4zMTFDNDEwLjE4OSAzNTcuNTU1IDQwMS41NDcgMzUxLjg5NSAzOTIgMzUxLjg5NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function KeyboardDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M512 0H64C28.654 0 0 28.652 0 64V224C0 259.346 28.654 288 64 288H512C547.348 288 576 259.346 576 224V64C576 28.652 547.348 0 512 0ZM256 76C256 69.375 261.375 64 268 64H308C314.625 64 320 69.375 320 76V116C320 122.625 314.625 128 308 128H268C261.375 128 256 122.625 256 116V76ZM160 76C160 69.375 165.375 64 172 64H212C218.625 64 224 69.375 224 76V116C224 122.625 218.625 128 212 128H172C165.375 128 160 122.625 160 116V76ZM128 212C128 218.625 122.625 224 116 224H76C69.375 224 64 218.625 64 212V172C64 165.375 69.375 160 76 160H116C122.625 160 128 165.375 128 172V212ZM128 116C128 122.625 122.625 128 116 128H76C69.375 128 64 122.625 64 116V76C64 69.375 69.375 64 76 64H116C122.625 64 128 69.375 128 76V116ZM416 212C416 218.625 410.625 224 404 224H172C165.375 224 160 218.625 160 212V172C160 165.375 165.375 160 172 160H404C410.625 160 416 165.375 416 172V212ZM416 116C416 122.625 410.625 128 404 128H364C357.375 128 352 122.625 352 116V76C352 69.375 357.375 64 364 64H404C410.625 64 416 69.375 416 76V116ZM512 212C512 218.625 506.625 224 500 224H460C453.375 224 448 218.625 448 212V172C448 165.375 453.375 160 460 160H500C506.625 160 512 165.375 512 172V212ZM512 116C512 122.625 506.625 128 500 128H460C453.375 128 448 122.625 448 116V76C448 69.375 453.375 64 460 64H500C506.625 64 512 69.375 512 76V116Z" />
            <path d="M268 128H308C314.625 128 320 122.625 320 116V76C320 69.375 314.625 64 308 64H268C261.375 64 256 69.375 256 76V116C256 122.625 261.375 128 268 128ZM172 128H212C218.625 128 224 122.625 224 116V76C224 69.375 218.625 64 212 64H172C165.375 64 160 69.375 160 76V116C160 122.625 165.375 128 172 128ZM116 160H76C69.375 160 64 165.375 64 172V212C64 218.625 69.375 224 76 224H116C122.625 224 128 218.625 128 212V172C128 165.375 122.625 160 116 160ZM116 64H76C69.375 64 64 69.375 64 76V116C64 122.625 69.375 128 76 128H116C122.625 128 128 122.625 128 116V76C128 69.375 122.625 64 116 64ZM500 64H460C453.375 64 448 69.375 448 76V116C448 122.625 453.375 128 460 128H500C506.625 128 512 122.625 512 116V76C512 69.375 506.625 64 500 64ZM500 160H460C453.375 160 448 165.375 448 172V212C448 218.625 453.375 224 460 224H500C506.625 224 512 218.625 512 212V172C512 165.375 506.625 160 500 160ZM404 64H364C357.375 64 352 69.375 352 76V116C352 122.625 357.375 128 364 128H404C410.625 128 416 122.625 416 116V76C416 69.375 410.625 64 404 64ZM392 351.895H184C174.451 351.895 165.811 357.555 162 366.311C158.186 375.066 159.92 385.26 166.404 392.248L270.406 504.322C279.904 514.559 296.096 514.559 305.594 504.322L409.596 392.248C416.08 385.26 417.814 375.066 414.004 366.311C410.189 357.555 401.547 351.895 392 351.895Z" />
        </Icon>
    </>
}
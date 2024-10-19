
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tachograph-digital` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tachograph-digital?s=duotone tachograph-digital}
 * @preview ![tachograph-digital](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NiA2NEg2NEMyOC44MDEgNjQgMCA5Mi43OTkgMCAxMjhWMzg0QzAgNDE5LjE5OSAyOC44MDEgNDQ4IDY0IDQ0OEg1NzZDNjExLjE5OSA0NDggNjQwIDQxOS4xOTkgNjQwIDM4NFYxMjhDNjQwIDkyLjc5OSA2MTEuMTk5IDY0IDU3NiA2NFpNNjQgMjk2QzY0IDI5MS42MjUgNjcuNjI1IDI4OCA3MiAyODhIODhDOTIuMzc1IDI4OCA5NiAyOTEuNjI1IDk2IDI5NlYzMTJDOTYgMzE2LjM3NSA5Mi4zNzUgMzIwIDg4IDMyMEg3MkM2Ny42MjUgMzIwIDY0IDMxNi4zNzUgNjQgMzEyVjI5NlpNMzUyIDM2OEMzNTIgMzc2LjggMzQ0LjggMzg0IDMzNiAzODRIODBDNzEuMiAzODQgNjQgMzc2LjggNjQgMzY4VjM2OEM2NCAzNTkuMiA3MS4yIDM1MiA4MCAzNTJIMzM2QzM0NC44IDM1MiAzNTIgMzU5LjIgMzUyIDM2OFYzNjhaTTEyOCAzMTJWMjk2QzEyOCAyOTEuNjI1IDEzMS42MjUgMjg4IDEzNiAyODhIMTUyQzE1Ni4zNzUgMjg4IDE2MCAyOTEuNjI1IDE2MCAyOTZWMzEyQzE2MCAzMTYuMzc1IDE1Ni4zNzUgMzIwIDE1MiAzMjBIMTM2QzEzMS42MjUgMzIwIDEyOCAzMTYuMzc1IDEyOCAzMTJaTTE5MiAzMTJWMjk2QzE5MiAyOTEuNjI1IDE5NS42MjUgMjg4IDIwMCAyODhIMjE2QzIyMC4zNzUgMjg4IDIyNCAyOTEuNjI1IDIyNCAyOTZWMzEyQzIyNCAzMTYuMzc1IDIyMC4zNzUgMzIwIDIxNiAzMjBIMjAwQzE5NS42MjUgMzIwIDE5MiAzMTYuMzc1IDE5MiAzMTJaTTI1NiAzMTJWMjk2QzI1NiAyOTEuNjI1IDI1OS42MjUgMjg4IDI2NCAyODhIMjgwQzI4NC4zNzUgMjg4IDI4OCAyOTEuNjI1IDI4OCAyOTZWMzEyQzI4OCAzMTYuMzc1IDI4NC4zNzUgMzIwIDI4MCAzMjBIMjY0QzI1OS42MjUgMzIwIDI1NiAzMTYuMzc1IDI1NiAzMTJaTTM1MiAzMTJDMzUyIDMxNi4zNzUgMzQ4LjM3NSAzMjAgMzQ0IDMyMEgzMjhDMzIzLjYyNSAzMjAgMzIwIDMxNi4zNzUgMzIwIDMxMlYyOTZDMzIwIDI5MS42MjUgMzIzLjYyNSAyODggMzI4IDI4OEgzNDRDMzQ4LjM3NSAyODggMzUyIDI5MS42MjUgMzUyIDI5NlYzMTJaTTM1MiAyMzcuNzEzQzM1MiAyNDcuODU3IDM0NC40IDI1NiAzMzQuOTM0IDI1Nkg4MS4wNjZDNzEuNiAyNTYgNjQgMjQ3Ljg1NyA2NCAyMzcuNzEzVjE0Ni4yODVDNjQgMTM2LjE0MyA3MS42IDEyOCA4MS4wNjYgMTI4SDMzNC45MzRDMzQ0LjQgMTI4IDM1MiAxMzYuMTQzIDM1MiAxNDYuMjg1VjIzNy43MTNaTTU3NiAzNjhDNTc2IDM3Ni44IDU2OC44IDM4NCA1NjAgMzg0SDQwMEMzOTEuMiAzODQgMzg0IDM3Ni44IDM4NCAzNjhWMzY4QzM4NCAzNTkuMiAzOTEuMiAzNTIgNDAwIDM1Mkg1NjBDNTY4LjggMzUyIDU3NiAzNTkuMiA1NzYgMzY4VjM2OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTYwIDM1Mkg0MDBDMzkxLjIgMzUyIDM4NCAzNTkuMiAzODQgMzY4VjM2OEMzODQgMzc2LjggMzkxLjIgMzg0IDQwMCAzODRINTYwQzU2OC44IDM4NCA1NzYgMzc2LjggNTc2IDM2OFYzNjhDNTc2IDM1OS4yIDU2OC44IDM1MiA1NjAgMzUyWk0zMzYgMzUySDgwQzcxLjIgMzUyIDY0IDM1OS4yIDY0IDM2OFYzNjhDNjQgMzc2LjggNzEuMiAzODQgODAgMzg0SDMzNkMzNDQuOCAzODQgMzUyIDM3Ni44IDM1MiAzNjhWMzY4QzM1MiAzNTkuMiAzNDQuOCAzNTIgMzM2IDM1MlpNMzM0LjkzNCAxMjhIODEuMDY2QzcxLjYgMTI4IDY0IDEzNi4xNDMgNjQgMTQ2LjI4NVYyMzcuNzEzQzY0IDI0Ny44NTcgNzEuNiAyNTYgODEuMDY2IDI1NkgzMzQuOTM0QzM0NC40IDI1NiAzNTIgMjQ3Ljg1NyAzNTIgMjM3LjcxM1YxNDYuMjg1QzM1MiAxMzYuMTQzIDM0NC40IDEyOCAzMzQuOTM0IDEyOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const TachographDigital: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M576 64H64C28.801 64 0 92.799 0 128V384C0 419.199 28.801 448 64 448H576C611.199 448 640 419.199 640 384V128C640 92.799 611.199 64 576 64ZM64 296C64 291.625 67.625 288 72 288H88C92.375 288 96 291.625 96 296V312C96 316.375 92.375 320 88 320H72C67.625 320 64 316.375 64 312V296ZM352 368C352 376.8 344.8 384 336 384H80C71.2 384 64 376.8 64 368V368C64 359.2 71.2 352 80 352H336C344.8 352 352 359.2 352 368V368ZM128 312V296C128 291.625 131.625 288 136 288H152C156.375 288 160 291.625 160 296V312C160 316.375 156.375 320 152 320H136C131.625 320 128 316.375 128 312ZM192 312V296C192 291.625 195.625 288 200 288H216C220.375 288 224 291.625 224 296V312C224 316.375 220.375 320 216 320H200C195.625 320 192 316.375 192 312ZM256 312V296C256 291.625 259.625 288 264 288H280C284.375 288 288 291.625 288 296V312C288 316.375 284.375 320 280 320H264C259.625 320 256 316.375 256 312ZM352 312C352 316.375 348.375 320 344 320H328C323.625 320 320 316.375 320 312V296C320 291.625 323.625 288 328 288H344C348.375 288 352 291.625 352 296V312ZM352 237.713C352 247.857 344.4 256 334.934 256H81.066C71.6 256 64 247.857 64 237.713V146.285C64 136.143 71.6 128 81.066 128H334.934C344.4 128 352 136.143 352 146.285V237.713ZM576 368C576 376.8 568.8 384 560 384H400C391.2 384 384 376.8 384 368V368C384 359.2 391.2 352 400 352H560C568.8 352 576 359.2 576 368V368Z" />
            <path d="M560 352H400C391.2 352 384 359.2 384 368V368C384 376.8 391.2 384 400 384H560C568.8 384 576 376.8 576 368V368C576 359.2 568.8 352 560 352ZM336 352H80C71.2 352 64 359.2 64 368V368C64 376.8 71.2 384 80 384H336C344.8 384 352 376.8 352 368V368C352 359.2 344.8 352 336 352ZM334.934 128H81.066C71.6 128 64 136.143 64 146.285V237.713C64 247.857 71.6 256 81.066 256H334.934C344.4 256 352 247.857 352 237.713V146.285C352 136.143 344.4 128 334.934 128Z" />
    </Icon>
);

export default TachographDigital;
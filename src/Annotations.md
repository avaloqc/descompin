### FOLDERS 
--> 
```
[
  {
    id: "1",
    name: "TOP 10",
    pins: ["pin1", "pin2"]
  },
  {
    id: "2",
    name: "",
    pins: ["pin1", "pin2"]
  },
  {
    id: "3", 
    name: "",
    pins: ["pin1", "pin2"]
  }
]
```

### ESTADO GLOBAL

```
{
  folders: [{}, {}],
  activePinId: "",
  mode: "savePin" | "createFolder",
  type: null,
}
```

abreModalPin() -> { folders: [], activePin: '123', modal: "savePin"}

closeModal() -> { folders: [], modal: null, activePin: null}

savePinInFolder("folder", "pin1") -> {folders: [{ id: pin}]} 
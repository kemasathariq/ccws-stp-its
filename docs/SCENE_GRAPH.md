# Pohon Hubungan Objek

Pohon lengkap ditampilkan otomatis di halaman utama (bagian "Pohon hubungan objek"), dibaca langsung dari scene graph yang dirender (`src/ui/renderSceneTree.js`). Ringkasan di bawah mengikuti `src/models/ccwsBuilding.js` dan `src/models/environment.js`; node sejenis diringkas, dan `→` berarti "induk dari".

```text
Scene
├── Environment
│   ├── GroundZones          Lawn, Paving (tekstur foto), area tanah, CanopyPad, ShedPath, ConcretePipe0..3
│   ├── PalmCornerPivot      → PalmCornerTrunk, PalmCornerFrondPivot0..17 → PalmCornerFrond0..17   (pelepah bergoyang)
│   ├── Trees                → Tree…Pivot ×6 → Tree…Trunk, Tree…CrownPivot → cabang dan tajuk      (tajuk bergoyang)
│   ├── EastAnnex            gedung samping satu lantai (polos, atap pelana genteng)
│   ├── BackBuilding         gedung belakang dua lantai (polos) + Connector satu lantai
│   └── ParkingShed          → ShedRoof, ShedPost…, ShedFence → FenceFront/West/Back/East (pagar pipa biru, bukaan di ujung jalur paving)
└── CCWS
    ├── MainBlock
    │   ├── Walls
    │   ├── RoofGroup        → Roof (tekstur genteng + bump), RidgeCap
    │   └── GableWest, GableEast   (dinding segitiga, sejajar kemiringan atap)
    ├── FrontFacade          (bidang dinding depan, z = D/2)
    │   ├── PierLeft/Right, Fascia, FasciaJoint, FloorBand, Plinth (tekstur noda)
    │   ├── UpperGlazing0..2, UpperRoomBehind0..2, UpperTransom/Head/Sill0..2, UpperMullion0..23
    │   ├── FrontFacadeSash… ×21 (Pivot di engsel atas) → Glass, FrameTop/Bottom/Left/Right
    │   ├── GroundWindows0..3 (tekstur teralis) + GroundFrames0..3 → Mullion, Transom, Sill
    │   ├── Pebbles0..1, Grass0..1, FrontFacadePlanter0..5 → Pot, Soil, Leaf0..5 → LeafBlade, LeafTip
    │   ├── FrontFacadeDownpipe0..3 → Top, Neck, Main, Shoe, Bracket0..1
    │   └── Entrance
    │       ├── PortalWall…, PortalRoof, PortalFloor, PortalLamp
    │       ├── PortalSign, PortalSubtitle → Layer0..n   (huruf berlapis, alpha test)
    │       ├── EntranceWindowWest/East + EntranceFramesWest/East
    │       ├── DoorFrameHead/West/East, DoorTransom
    │       ├── MainDoorWestPivot, MainDoorEastPivot (di engsel) → Glass, Stile0..1, Rail0..1, Handle
    │       └── CheekWallWest/East, StepTopWest/BottomWest, Ramp, StepTopEast/BottomEast   (tangga – ramp – tangga)
    ├── BackFacade           (z = −D/2, fungsi yang sama diputar 180° pada sumbu Y; tanpa portal, bagian tengah tertutup penghubung ke gedung belakang)
    └── CoworkingEnd         (dinding gable barat, x = −L/2)
        ├── SlotWindow, SlotLouver0..3, CoworkingSign → Layer0..4
        ├── SideDoorFrame…, SideDoorBack, SideDoorNorthPivot, SideDoorSouthPivot (di engsel) → daun pintu
        ├── SideLanding, Sink, SinkTap
        └── Canopy
            ├── CanopySlab (segilima), CanopySlabBand, CanopyCeiling (tekstur plafon), CanopyLampInner/Outer
            ├── CanopyColumnNorth/South + CanopyArmNorth/South   (tiang menyambung jadi lengan miring, rangka ⌂)
            ├── BinPlatform
            ├── WheelieBin0..2 → Body, Rim, Handle, Axle, Wheel…, LidPivot (engsel belakang) → Lid
            └── BinRack → Shelf, Leg…, RailBack, PedalBin0..2 → Body, LidPivot → Lid, Knob
```

Matriks dunia anak = matriks dunia induk × matriks lokal anak, dengan matriks lokal = T · Rz · Ry · Rx · S (`src/webgl/mat4.js`, `src/webgl/sceneNode.js`).

- **Induk menggerakkan anak.** Menggeser `FrontFacade` atau `CoworkingEnd` ikut menggeser seluruh anaknya; inilah yang ditunjukkan tombol "Urai hierarki".
- **Satu fungsi, dua fasad.** `FrontFacade` dan `BackFacade` dibuat oleh fungsi yang sama; `BackFacade` hanya berbeda translasi dan rotasinya. Sisi belakang dibuat sama dengan depan berdasarkan informasi tim, karena tidak ada foto sisi belakang.
- **Pivot.** Setiap simpul `…Pivot` diletakkan di engsel atau poros. Animator hanya mengubah rotasi pivot itu (`src/world/animator.js`).

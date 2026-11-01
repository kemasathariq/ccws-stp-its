# Scene Graph and Hierarchical Object Tree

## World-level hierarchy

```text
CCWS_STP_World
├── Lighting
├── GroundAndSiteContext
├── Exterior
│   ├── FoundationAndFloor
│   ├── WallSegments
│   ├── RoofAndOverhangs
│   ├── EntranceFrame
│   │   ├── DoorLeft
│   │   └── DoorRight
│   ├── WindowFrames
│   ├── FacadeSignage
│   ├── Pavement
│   └── Vegetation
├── Interior
│   ├── Floor
│   ├── CeilingAndBeams
│   ├── WindowWallLeft
│   ├── WindowWallRight
│   ├── WorkspaceFurniture
│   │   ├── Tables
│   │   ├── Chairs
│   │   └── Sofas
│   └── Cafe
│       ├── Counter
│       ├── Shelves
│       └── Equipment
└── InnovationExhibition
    ├── TrainExhibit
    ├── ElectricMotorcycle
    └── RobotArm
```

## Robot arm hierarchy

```text
RobotArmRoot
└── BaseVisual
    └── BaseYawPivot
        └── TurntableVisual
            └── ShoulderPivot
                ├── UpperArmVisual
                └── ElbowPivot
                    ├── ForearmVisual
                    └── WristPivot
                        └── GripperRoot
                            ├── PalmVisual
                            ├── LeftFingerPivot
                            │   └── LeftFingerVisual
                            └── RightFingerPivot
                                └── RightFingerVisual

PickableObject (world child while released; attached to GripperRoot while held)
```

Each joint uses a pivot `THREE.Group` positioned at the joint center. The visual mesh is offset from that pivot. Store joint angles in an explicit state object and apply limits.

## Motorcycle hierarchy

```text
MotorcycleRoot
├── Chassis
├── BodyPanels
├── Seat
├── HandlebarAssembly
├── FrontWheelPivot
│   ├── Tire
│   └── RimAndHub
└── RearWheelPivot
    ├── Tire
    └── RimAndHub
```

Wheel rotation must be local to each wheel pivot. A power toggle controls wheel animation state. Wheel speed should be updated using delta time.

## Train exhibit hierarchy

```text
TrainExhibitRoot
├── MainCarriageBody
├── Roof
├── FrontAndSidePanels
├── WindowGroups
├── DoorAssembly (if present in the actual exhibit)
│   ├── LeftDoor
│   └── RightDoor
├── BogiesAndWheels (if visible / needed)
└── DestinationDisplay
```

Only build details that can be observed or reasonably simplified from the reference. Mark uncertain elements as assumptions.

## Hierarchy diagram requirement

The final submission must show the parent-child relationships. Use this document to create a visual tree (Mermaid or image) and ensure it matches the actual code structure.

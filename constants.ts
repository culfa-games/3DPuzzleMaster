
import { LevelData } from './types';

export const LEVELS: LevelData[] = [
  {
    id: 1,
    title: "Project: Iconic Dragon",
    emoji: "🐲",
    background: "linear-gradient(180deg, #0F172A 0%, #1E40AF 100%)",
    parts: [
      // PIECE 01: NOBLE DRAGON HEAD (The Face of the Game)
      {
        id: 'iconic_dragon_head', name: 'Noble Dragon Head', initialPos: [-5, 6, 2], targetPos: [0, 1.8, 1.2], dimensions: [0, 0, 0], color: '#2563EB', type: 'group', subParts: [
          { type: 'box', pos: [0, 0, 0], dim: [0.8, 0.7, 0.9], color: '#2563EB' }, // Main Skull
          { type: 'box', pos: [0, -0.2, 0.6], dim: [0.6, 0.4, 0.8], color: '#3B82F6' }, // Snout
          { type: 'box', pos: [0, -0.4, 0.65], dim: [0.5, 0.15, 0.7], color: '#F97316' }, // Lower Jaw Plate
          { type: 'sphere', pos: [-0.35, 0.2, 0.4], dim: [0.25, 0, 0], color: '#FACC15' }, // Left Eye Glow
          { type: 'sphere', pos: [0.35, 0.2, 0.4], dim: [0.25, 0, 0], color: '#FACC15' }, // Right Eye Glow
          { type: 'cylinder', pos: [-0.25, 0.4, -0.2], dim: [0.1, 0.1, 0.6], color: '#FB923C', rot: [-0.5, 0, 0] }, // Horn L
          { type: 'cylinder', pos: [0.25, 0.4, -0.2], dim: [0.1, 0.1, 0.6], color: '#FB923C', rot: [-0.5, 0, 0] }, // Horn R
        ]
      },

      // PIECE 02: UPPER CERVIX (The curved neck)
      {
        id: 'iconic_dragon_neck', name: 'Segmented Neck', initialPos: [5, 4, -3], targetPos: [0, 1.1, 0.7], dimensions: [0, 0, 0], color: '#1E40AF', type: 'group', subParts: [
          { type: 'capsule', pos: [0, 0, 0], dim: [0.5, 0.8, 0], color: '#1E40AF', rot: [0.4, 0, 0] },
          { type: 'box', pos: [0, -0.2, 0.3], dim: [0.4, 0.6, 0.1], color: '#F97316', rot: [0.4, 0, 0] }, // Throat scales
        ]
      },

      // PIECE 03: THORACIC CHASSIS (Chest and Wing Base)
      {
        id: 'iconic_dragon_torso', name: 'Thoracic Chassis', initialPos: [0, -5, 5], targetPos: [0, 0.1, 0.2], dimensions: [0, 0, 0], color: '#2563EB', type: 'group', subParts: [
          { type: 'box', pos: [0, 0, 0], dim: [0.9, 1.1, 0.8], color: '#2563EB' }, // Main Chest
          { type: 'box', pos: [0, -0.1, 0.45], dim: [0.7, 0.9, 0.1], color: '#FEF3C7' }, // Cream Belly Plate
          { type: 'cylinder', pos: [-0.4, 0.3, -0.2], dim: [0.15, 0.15, 0.3], color: '#1E3A8A' }, // Wing Socket L
          { type: 'cylinder', pos: [0.4, 0.3, -0.2], dim: [0.15, 0.15, 0.3], color: '#1E3A8A' }, // Wing Socket R
        ]
      },

      // PIECE 04: ABDOMINAL COIL (First curve of the body)
      {
        id: 'iconic_dragon_coil_1', name: 'Abdominal Coil', initialPos: [-6, -2, -4], targetPos: [0, -0.6, -0.3], dimensions: [0, 0, 0], color: '#1E40AF', type: 'group', subParts: [
          { type: 'box', pos: [0, 0, 0], dim: [0.85, 0.7, 1.0], color: '#1E40AF', rot: [0.2, 0.2, 0] },
          { type: 'box', pos: [0, -0.25, 0], dim: [0.65, 0.1, 0.8], color: '#F97316' }, // Belly scales
        ]
      },

      // PIECE 05: TAIL SWEEP (Low coil wrapping around)
      {
        id: 'iconic_dragon_tail_base', name: 'Caudal Curve', initialPos: [6, -6, 0], targetPos: [0.5, -0.9, 0.6], dimensions: [0, 0, 0], color: '#2563EB', type: 'group', subParts: [
          { type: 'cylinder', pos: [0, 0, 0], dim: [0.35, 0.35, 1.2], color: '#2563EB', rot: [0, 1.2, 0] },
          { type: 'box', pos: [0.3, 0.2, 0], dim: [0.1, 0.3, 0.3], color: '#F97316', rot: [0, 1.2, 0] }, // Spikes
        ]
      },

      // PIECE 06: RADIANT TAIL TIP
      {
        id: 'iconic_dragon_tail_tip', name: 'Radiant Tail Tip', initialPos: [0, -8, -5], targetPos: [-0.8, -0.9, 0.1], dimensions: [0, 0, 0], color: '#3B82F6', type: 'group', subParts: [
          { type: 'cylinder', pos: [0, 0, 0], dim: [0.2, 0.2, 0.8], color: '#3B82F6', rot: [0, -0.8, 0] },
          { type: 'sphere', pos: [-0.4, 0, 0.35], dim: [0.3, 0, 0], color: '#FACC15' }, // Mana Core / Flame
        ]
      },

      // PIECE 07: LEFT MAJESTIC WING
      {
        id: 'iconic_dragon_wing_l', name: 'Majestic Wing L', initialPos: [-8, 2, 2], targetPos: [-1.4, 1.0, -0.3], dimensions: [0, 0, 0], color: '#1E40AF', type: 'group', subParts: [
          { type: 'box', pos: [0, 0, 0], dim: [1.8, 1.4, 0.05], color: '#F97316', rot: [0.2, 0.3, 0.5] }, // Membrane
          { type: 'cylinder', pos: [0.6, 0.5, 0], dim: [0.08, 0.08, 2.0], color: '#1E3A8A', rot: [0, 0, -0.8] }, // Primary Bone
          { type: 'cylinder', pos: [0.2, 0, 0], dim: [0.05, 0.05, 1.5], color: '#1E3A8A', rot: [0, 0, -0.4] }, // Rib 1
        ]
      },

      // PIECE 08: RIGHT MAJESTIC WING
      {
        id: 'iconic_dragon_wing_r', name: 'Majestic Wing R', initialPos: [8, 2, 2], targetPos: [1.4, 1.0, -0.3], dimensions: [0, 0, 0], color: '#1E40AF', type: 'group', subParts: [
          { type: 'box', pos: [0, 0, 0], dim: [1.8, 1.4, 0.05], color: '#F97316', rot: [-0.2, -0.3, 0.5] }, // Membrane
          { type: 'cylinder', pos: [-0.6, 0.5, 0], dim: [0.08, 0.08, 2.0], color: '#1E3A8A', rot: [0, 0, 0.8] }, // Primary Bone
          { type: 'cylinder', pos: [-0.2, 0, 0], dim: [0.05, 0.05, 1.5], color: '#1E3A8A', rot: [0, 0, 0.4] }, // Rib 1
        ]
      },

      // PIECE 09: DORSAL SPINE ARRAY (Top spikes)
      {
        id: 'iconic_dragon_spines', name: 'Dorsal Spines', initialPos: [0, 8, -2], targetPos: [0, 0.7, 0.1], dimensions: [0, 0, 0], color: '#F97316', type: 'group', subParts: [
          { type: 'box', pos: [0, 0, 0], dim: [0.15, 0.4, 0.3], color: '#F97316' },
          { type: 'box', pos: [0, -0.3, -0.4], dim: [0.15, 0.35, 0.3], color: '#F97316' },
          { type: 'box', pos: [0, -0.5, -0.8], dim: [0.15, 0.3, 0.3], color: '#F97316' },
        ]
      },

      // PIECE 10: MANA CLAWS (Small limbs)
      {
        id: 'iconic_dragon_claws', name: 'Mana Claws', initialPos: [-3, -4, 6], targetPos: [0, -0.2, 0.8], dimensions: [0, 0, 0], color: '#3B82F6', type: 'group', subParts: [
          { type: 'capsule', pos: [-0.4, 0, 0], dim: [0.15, 0.4, 0], color: '#3B82F6', rot: [0, 0, 0.5] }, // Arm L
          { type: 'capsule', pos: [0.4, 0, 0], dim: [0.15, 0.4, 0], color: '#3B82F6', rot: [0, 0, -0.5] }, // Arm R
          { type: 'sphere', pos: [-0.5, -0.2, 0.1], dim: [0.12, 0, 0], color: '#F97316' }, // Claw L
          { type: 'sphere', pos: [0.5, -0.2, 0.1], dim: [0.12, 0, 0], color: '#F97316' }, // Claw R
        ]
      },
    ]
  },
  {
    id: 2,
    title: "The Blue Elephant",
    emoji: "🐘",
    background: "#eef2ff",
    parts: [
      { id: 'e1', name: 'Body', initialPos: [-4, 0, 0], targetPos: [0, 0, 0], dimensions: [1.8, 1.4, 1.2], color: '#4f46e5', type: 'box' },
      { id: 'e2', name: 'Head', initialPos: [4, 2, 0], targetPos: [1.4, 0.5, 0], dimensions: [1, 1, 0.9], color: '#4f46e5', type: 'box' },
      { id: 'e3', name: 'Trunk', initialPos: [0, 4, 1], targetPos: [2.2, 0, 0], dimensions: [0.4, 1, 0.3], color: '#4f46e5', type: 'box' },
      { id: 'e4', name: 'Leg 1', initialPos: [-2, -3, 2], targetPos: [0.6, -1.1, 0.4], dimensions: [0.5, 0.8, 0.5], color: '#4338ca', type: 'box' },
      { id: 'e5', name: 'Leg 2', initialPos: [2, -3, -2], targetPos: [0.6, -1.1, -0.4], dimensions: [0.5, 0.8, 0.5], color: '#4338ca', type: 'box' },
      { id: 'e6', name: 'Leg 3', initialPos: [-2, -3, -2], targetPos: [-0.6, -1.1, 0.4], dimensions: [0.5, 0.8, 0.5], color: '#4338ca', type: 'box' },
      { id: 'e7', name: 'Leg 4', initialPos: [2, -3, 2], targetPos: [-0.6, -1.1, -0.4], dimensions: [0.5, 0.8, 0.5], color: '#4338ca', type: 'box' },
    ]
  },
  {
    id: 3,
    title: "The Orange Tiger",
    emoji: "🐅",
    background: "#fff7ed",
    parts: [
      { id: 't1', name: 'Main Body', initialPos: [-4, 0, 2], targetPos: [0, 0, 0], dimensions: [2.2, 1, 0.9], color: '#f97316', type: 'box' },
      { id: 't2', name: 'Tiger Head', initialPos: [4, 3, -1], targetPos: [1.4, 0.6, 0], dimensions: [0.8, 0.8, 0.7], color: '#fb923c', type: 'box' },
      { id: 't3', name: 'Front Left Leg', initialPos: [1, -4, 3], targetPos: [0.7, -0.8, 0.35], dimensions: [0.3, 0.8, 0.3], color: '#ea580c', type: 'box' },
      { id: 't4', name: 'Front Right Leg', initialPos: [-2, -3, -3], targetPos: [0.7, -0.8, -0.35], dimensions: [0.3, 0.8, 0.3], color: '#ea580c', type: 'box' },
      { id: 't5', name: 'Back Left Leg', initialPos: [3, -2, 4], targetPos: [-0.7, -0.8, 0.35], dimensions: [0.3, 0.8, 0.3], color: '#ea580c', type: 'box' },
      { id: 't6', name: 'Back Right Leg', initialPos: [-3, -4, -1], targetPos: [-0.7, -0.8, -0.35], dimensions: [0.3, 0.8, 0.3], color: '#ea580c', type: 'box' },
      { id: 't7', name: 'Tail', initialPos: [-1, 4, 0], targetPos: [-1.4, 0.3, 0], dimensions: [0.8, 0.2, 0.2], color: '#f97316', type: 'box' },
      { id: 't8', name: 'Right Ear', initialPos: [2, 5, 2], targetPos: [1.4, 1.1, -0.2], dimensions: [0.15, 0.2, 0.15], color: '#000000', type: 'box' },
      { id: 't9', name: 'Left Ear', initialPos: [-2, 5, -2], targetPos: [1.4, 1.1, 0.2], dimensions: [0.15, 0.2, 0.15], color: '#000000', type: 'box' },
    ]
  },
  {
    id: 4,
    title: "The Green Turtle",
    emoji: "🐢",
    background: "#f0fdf4",
    parts: [
      { id: 'tu1', name: 'Upper Shell', initialPos: [-4, 0, 3], targetPos: [0, 0.2, 0], dimensions: [1.8, 0.4, 1.6], color: '#16a34a', type: 'box' },
      { id: 'tu2', name: 'Lower Body', initialPos: [4, -1, -2], targetPos: [0, -0.1, 0], dimensions: [1.6, 0.2, 1.4], color: '#15803d', type: 'box' },
      { id: 'tu3', name: 'Turtle Head', initialPos: [0, 4, 2], targetPos: [1.3, 0, 0], dimensions: [0.6, 0.4, 0.4], color: '#22c55e', type: 'box' },
      { id: 'tu4', name: 'Front Left Flipper', initialPos: [2, -4, 4], targetPos: [0.8, -0.2, 0.9], dimensions: [0.6, 0.1, 0.5], color: '#22c55e', type: 'box' },
      { id: 'tu5', name: 'Front Right Flipper', initialPos: [-2, -4, -4], targetPos: [0.8, -0.2, -0.9], dimensions: [0.6, 0.1, 0.5], color: '#22c55e', type: 'box' },
      { id: 'tu6', name: 'Back Left Flipper', initialPos: [3, -3, 3], targetPos: [-0.8, -0.2, 0.8], dimensions: [0.5, 0.1, 0.4], color: '#22c55e', type: 'box' },
      { id: 'tu7', name: 'Back Right Flipper', initialPos: [-3, -3, -3], targetPos: [-0.8, -0.2, -0.8], dimensions: [0.5, 0.1, 0.4], color: '#22c55e', type: 'box' },
      { id: 'tu8', name: 'Little Tail', initialPos: [-1, 3, -2], targetPos: [-1.0, -0.1, 0], dimensions: [0.3, 0.1, 0.2], color: '#22c55e', type: 'box' },
    ]
  },
  {
    id: 5,
    title: "The Yellow Giraffe",
    emoji: "🦒",
    background: "#fefce8",
    parts: [
      { id: 'g1', name: 'Main Body', initialPos: [-4, 0, 0], targetPos: [0, 0.5, 0], dimensions: [1.2, 1.0, 0.7], color: '#eab308', type: 'box' },
      { id: 'g2', name: 'Long Neck', initialPos: [4, 4, 1], targetPos: [0.6, 1.6, 0], dimensions: [0.3, 1.8, 0.3], color: '#facc15', type: 'box' },
      { id: 'g3', name: 'Small Head', initialPos: [-2, 5, -2], targetPos: [0.9, 2.5, 0], dimensions: [0.6, 0.4, 0.4], color: '#eab308', type: 'box' },
      { id: 'g4', name: 'Leg Front Left', initialPos: [2, -4, 3], targetPos: [0.4, -0.6, 0.25], dimensions: [0.2, 1.2, 0.2], color: '#ca8a04', type: 'box' },
      { id: 'g5', name: 'Leg Front Right', initialPos: [-3, -4, -3], targetPos: [0.4, -0.6, -0.25], dimensions: [0.2, 1.2, 0.2], color: '#ca8a04', type: 'box' },
      { id: 'g6', name: 'Leg Back Left', initialPos: [3, -4, -2], targetPos: [-0.4, -0.6, 0.25], dimensions: [0.2, 1.2, 0.2], color: '#ca8a04', type: 'box' },
      { id: 'g7', name: 'Leg Back Right', initialPos: [-2, -4, 2], targetPos: [-0.4, -0.6, -0.25], dimensions: [0.2, 1.2, 0.2], color: '#ca8a04', type: 'box' },
      { id: 'g8', name: 'Tiny Tail', initialPos: [0, 3, -4], targetPos: [-0.7, 0.6, 0], dimensions: [0.1, 0.4, 0.1], color: '#facc15', type: 'box' },
      { id: 'g9', name: 'Left Horn', initialPos: [1, 6, 1], targetPos: [0.8, 2.8, 0.1], dimensions: [0.08, 0.2, 0.08], color: '#422006', type: 'box' },
      { id: 'g10', name: 'Right Horn', initialPos: [-1, 6, -1], targetPos: [0.8, 2.8, -0.1], dimensions: [0.08, 0.2, 0.08], color: '#422006', type: 'box' },
    ]
  },
  {
    id: 6,
    title: "The Red Crab",
    emoji: "🦀",
    background: "#fef2f2",
    parts: [
      { id: 'c1', name: 'Crab Shell', initialPos: [-4, 0, 3], targetPos: [0, 0, 0], dimensions: [1.8, 0.6, 1.4], color: '#ef4444', type: 'box' },
      { id: 'c2', name: 'Left Claw Arm', initialPos: [4, 1, 2], targetPos: [1.2, 0, 0.5], dimensions: [0.6, 0.2, 0.3], color: '#dc2626', type: 'box' },
      { id: 'c3', name: 'Left Pincher', initialPos: [5, 2, 0], targetPos: [1.8, 0.1, 0.6], dimensions: [0.4, 0.5, 0.4], color: '#b91c1c', type: 'box' },
      { id: 'c4', name: 'Right Claw Arm', initialPos: [-4, 1, -2], targetPos: [-1.2, 0, 0.5], dimensions: [0.6, 0.2, 0.3], color: '#dc2626', type: 'box' },
      { id: 'c5', name: 'Right Pincher', initialPos: [-5, 2, 0], targetPos: [-1.8, 0.1, 0.6], dimensions: [0.4, 0.5, 0.4], color: '#b91c1c', type: 'box' },
      { id: 'c6', name: 'Leg Back Left', initialPos: [3, -3, 3], targetPos: [0.8, -0.4, -0.6], dimensions: [0.2, 0.5, 0.2], color: '#ef4444', type: 'box' },
      { id: 'c7', name: 'Leg Back Right', initialPos: [-3, -3, -3], targetPos: [-0.8, -0.4, -0.6], dimensions: [0.2, 0.5, 0.2], color: '#ef4444', type: 'box' },
      { id: 'c8', name: 'Eye Stalk Left', initialPos: [0, 4, 2], targetPos: [0.3, 0.5, 0.6], dimensions: [0.1, 0.4, 0.1], color: '#ef4444', type: 'box' },
      { id: 'c9', name: 'Eye Stalk Right', initialPos: [0, 4, -2], targetPos: [-0.3, 0.5, 0.6], dimensions: [0.1, 0.4, 0.1], color: '#ef4444', type: 'box' },
    ]
  },
  {
    id: 7,
    title: "The Grey Shark",
    emoji: "🦈",
    background: "#ecfeff",
    parts: [
      { id: 's1', name: 'Main Body', initialPos: [-4, 0, 3], targetPos: [0, 0, 0], dimensions: [2.5, 1, 1], color: '#64748b', type: 'box' },
      { id: 's2', name: 'Shark Snout', initialPos: [4, 1, 2], targetPos: [1.8, 0, 0], dimensions: [1, 0.6, 0.6], color: '#94a3b8', type: 'box' },
      { id: 's3', name: 'Dorsal Fin', initialPos: [0, 4, 0], targetPos: [-0.2, 0.8, 0], dimensions: [0.3, 0.7, 0.1], color: '#475569', type: 'box' },
      { id: 's4', name: 'Tail Base', initialPos: [-4, -1, -2], targetPos: [-1.6, 0, 0], dimensions: [0.8, 0.4, 0.4], color: '#64748b', type: 'box' },
      { id: 's5', name: 'Tail Fin', initialPos: [-5, 2, 0], targetPos: [-2.4, 0, 0], dimensions: [0.2, 1.4, 0.1], color: '#475569', type: 'box' },
      { id: 's6', name: 'Left Side Fin', initialPos: [3, -3, 3], targetPos: [0.4, -0.2, 0.8], dimensions: [0.5, 0.1, 0.6], color: '#475569', type: 'box' },
      { id: 's7', name: 'Right Side Fin', initialPos: [-3, -3, -3], targetPos: [0.4, -0.2, -0.8], dimensions: [0.5, 0.1, 0.6], color: '#475569', type: 'box' },
      { id: 's8', name: 'Left Eye', initialPos: [2, 4, 1], targetPos: [2, 0.2, 0.35], dimensions: [0.1, 0.1, 0.1], color: '#000000', type: 'box' },
      { id: 's9', name: 'Right Eye', initialPos: [-2, 4, -1], targetPos: [2, 0.2, -0.35], dimensions: [0.1, 0.1, 0.1], color: '#000000', type: 'box' },
    ]
  },
  {
    id: 8,
    title: "The Purple Butterfly",
    emoji: "🦋",
    background: "#faf5ff",
    parts: [
      { id: 'bt1', name: 'Butterfly Body', initialPos: [-2, 4, 3], targetPos: [0, 0, 0], dimensions: [0.25, 1.2, 0.2], color: '#7e22ce', type: 'capsule' },
      { id: 'bt2', name: 'Butterfly Head', initialPos: [2, 5, -2], targetPos: [0, 0.7, 0], dimensions: [0.2, 0, 0], color: '#9333ea', type: 'sphere' },
      { id: 'bt3', name: 'Left Upper Wing', initialPos: [-4, 2, 0], targetPos: [-0.9, 0.5, 0.1], dimensions: [1.2, 1.0, 0.05], color: '#a855f7', type: 'box' },
      { id: 'bt4', name: 'Right Upper Wing', initialPos: [4, 2, 0], targetPos: [0.9, 0.5, 0.1], dimensions: [1.2, 1.0, 0.05], color: '#a855f7', type: 'box' },
      { id: 'bt5', name: 'Left Lower Wing', initialPos: [-3, -2, 2], targetPos: [-0.7, -0.4, 0.05], dimensions: [1.0, 0.8, 0.05], color: '#c084fc', type: 'box' },
      { id: 'bt6', name: 'Right Lower Wing', initialPos: [3, -2, -2], targetPos: [0.7, -0.4, 0.05], dimensions: [1.0, 0.8, 0.05], color: '#c084fc', type: 'box' },
      { id: 'bt7', name: 'Left Antenna', initialPos: [-1, 6, 1], targetPos: [-0.15, 1.0, 0], dimensions: [0.03, 0.5, 0.03], color: '#581c87', type: 'cylinder' },
      { id: 'bt8', name: 'Right Antenna', initialPos: [1, 6, -1], targetPos: [0.15, 1.0, 0], dimensions: [0.03, 0.5, 0.03], color: '#581c87', type: 'cylinder' },
    ]
  },
  {
    id: 9,
    title: "The Brown Bear",
    emoji: "🐻",
    background: "#fffaf3",
    parts: [
      { id: 'bb1', name: 'Bear Torso', initialPos: [0, -4, 4], targetPos: [0, -0.2, 0], dimensions: [1.4, 1.6, 1.1], color: '#78350f', type: 'box' },
      { id: 'bb2', name: 'Bear Head', initialPos: [-4, 3, 0], targetPos: [0, 1.0, 0.2], dimensions: [0.55, 0, 0], color: '#92400e', type: 'sphere' },
      { id: 'bb3', name: 'Snout', initialPos: [4, 2, -3], targetPos: [0, 0.9, 0.7], dimensions: [0.4, 0.3, 0.3], color: '#d97706', type: 'box' },
      { id: 'bb4', name: 'Left Ear', initialPos: [-2, 5, 2], targetPos: [-0.4, 1.5, 0.2], dimensions: [0.15, 0, 0], color: '#78350f', type: 'sphere' },
      { id: 'bb5', name: 'Right Ear', initialPos: [2, 5, -2], targetPos: [0.4, 1.5, 0.2], dimensions: [0.15, 0, 0], color: '#78350f', type: 'sphere' },
      { id: 'bb6', name: 'Leg Front Left', initialPos: [-3, -2, -2], targetPos: [-0.5, -0.8, 0.6], dimensions: [0.4, 1.0, 0.4], color: '#451a03', type: 'box' },
      { id: 'bb7', name: 'Leg Front Right', initialPos: [3, -2, 2], targetPos: [0.5, -0.8, 0.6], dimensions: [0.4, 1.0, 0.4], color: '#451a03', type: 'box' },
      { id: 'bb8', name: 'Leg Back Left', initialPos: [-3, -4, 0], targetPos: [-0.6, -0.8, -0.5], dimensions: [0.5, 0.9, 0.5], color: '#451a03', type: 'box' },
      { id: 'bb9', name: 'Leg Back Right', initialPos: [3, -4, 0], targetPos: [0.6, -0.8, -0.5], dimensions: [0.5, 0.9, 0.5], color: '#451a03', type: 'box' },
    ]
  },
  {
    id: 10,
    title: "The Space Rocket",
    emoji: "🚀",
    background: "#0f172a",
    parts: [
      { id: 'rk1', name: 'Main Fuselage', initialPos: [0, 8, 0], targetPos: [0, 0, 0], dimensions: [0.7, 0.7, 2.5], color: '#f8fafc', type: 'cylinder' },
      { id: 'rk2', name: 'Rocket Nose', initialPos: [-3, 5, 3], targetPos: [0, 1.5, 0], dimensions: [0.7, 0, 0], color: '#ef4444', type: 'sphere' },
      { id: 'rk3', name: 'Left Fin', initialPos: [-4, -2, 0], targetPos: [-0.6, -1.0, 0], dimensions: [0.5, 0.8, 0.1], color: '#ef4444', type: 'box' },
      { id: 'rk4', name: 'Right Fin', initialPos: [4, -2, 0], targetPos: [0.6, -1.0, 0], dimensions: [0.5, 0.8, 0.1], color: '#ef4444', type: 'box' },
      { id: 'rk5', name: 'Front Fin', initialPos: [0, -2, 4], targetPos: [0, -1.0, 0.6], dimensions: [0.1, 0.8, 0.5], color: '#dc2626', type: 'box' },
      { id: 'rk6', name: 'Back Fin', initialPos: [0, -2, -4], targetPos: [0, -1.0, -0.6], dimensions: [0.1, 0.8, 0.5], color: '#dc2626', type: 'box' },
      { id: 'rk7', name: 'Engine Nozzle', initialPos: [0, -5, 0], targetPos: [0, -1.4, 0], dimensions: [0.5, 0.4, 0.4], color: '#334155', type: 'cylinder' },
      { id: 'rk8', name: 'Observation Window', initialPos: [3, 4, 3], targetPos: [0, 0.4, 0.65], dimensions: [0.2, 0, 0], color: '#38bdf8', type: 'sphere' },
    ]
  },
  {
    id: 11,
    title: "The Happy Robot",
    emoji: "🤖",
    background: "#e0f2fe",
    parts: [
      { id: 'rb1', name: 'Body', initialPos: [-4, 0, 2], targetPos: [0, 0, 0], dimensions: [1.0, 1.2, 0.8], color: '#3b82f6', type: 'box' },
      { id: 'rb2', name: 'Head', initialPos: [4, 2, -1], targetPos: [0, 1.0, 0], dimensions: [0.8, 0.7, 0.7], color: '#94a3b8', type: 'box' },
      { id: 'rb3', name: 'Left Arm', initialPos: [3, -2, 3], targetPos: [-0.7, 0.1, 0], dimensions: [0.3, 0.9, 0.3], color: '#64748b', type: 'box' },
      { id: 'rb4', name: 'Right Arm', initialPos: [-3, -3, -2], targetPos: [0.7, 0.1, 0], dimensions: [0.3, 0.9, 0.3], color: '#64748b', type: 'box' },
      { id: 'rb5', name: 'Left Leg', initialPos: [2, -4, -3], targetPos: [-0.25, -1.0, 0], dimensions: [0.35, 1.0, 0.35], color: '#475569', type: 'box' },
      { id: 'rb6', name: 'Right Leg', initialPos: [-2, -4, 3], targetPos: [0.25, -1.0, 0], dimensions: [0.35, 1.0, 0.35], color: '#475569', type: 'box' },
      { id: 'rb7', name: 'Antenna', initialPos: [0, 5, 0], targetPos: [0, 1.5, 0], dimensions: [0.05, 0.05, 0.5], color: '#ef4444', type: 'cylinder' },
      { id: 'rb8', name: 'Antenna Ball', initialPos: [1, 5, 1], targetPos: [0, 1.75, 0], dimensions: [0.1, 0, 0], color: '#ef4444', type: 'sphere' },
      { id: 'rb9', name: 'Left Eye', initialPos: [-1, 3, 2], targetPos: [-0.2, 1.0, 0.35], dimensions: [0.1, 0, 0], color: '#facc15', type: 'sphere' },
      { id: 'rb10', name: 'Right Eye', initialPos: [1, 3, 2], targetPos: [0.2, 1.0, 0.35], dimensions: [0.1, 0, 0], color: '#facc15', type: 'sphere' },
    ]
  },
  {
    id: 12,
    title: "The Classic Car",
    emoji: "🚗",
    background: "#fecaca",
    parts: [
      { id: 'car1', name: 'Chassis', initialPos: [4, -2, 3], targetPos: [0, -0.5, 0], dimensions: [3, 0.5, 1.2], color: '#ef4444', type: 'box' },
      { id: 'car2', name: 'Cabin', initialPos: [-3, 3, -2], targetPos: [-0.3, 0.3, 0], dimensions: [1.8, 0.9, 1.2], color: '#f87171', type: 'box' },
      { id: 'car3', name: 'Front Left Wheel', initialPos: [2, -4, 2], targetPos: [1, -0.6, 0.6], dimensions: [0.5, 0.5, 0.2], color: '#1f2937', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'car4', name: 'Front Right Wheel', initialPos: [-2, -4, -2], targetPos: [1, -0.6, -0.6], dimensions: [0.5, 0.5, 0.2], color: '#1f2937', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'car5', name: 'Back Left Wheel', initialPos: [3, 1, 3], targetPos: [-1, -0.6, 0.6], dimensions: [0.5, 0.5, 0.2], color: '#1f2937', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'car6', name: 'Back Right Wheel', initialPos: [-4, 2, -3], targetPos: [-1, -0.6, -0.6], dimensions: [0.5, 0.5, 0.2], color: '#1f2937', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'car7', name: 'Headlight 1', initialPos: [1, 4, 1], targetPos: [1.5, -0.3, 0.4], dimensions: [0.1, 0.2, 0.2], color: '#fef3c7', type: 'sphere' },
      { id: 'car8', name: 'Headlight 2', initialPos: [-1, 4, -1], targetPos: [1.5, -0.3, -0.4], dimensions: [0.1, 0.2, 0.2], color: '#fef3c7', type: 'sphere' },
    ]
  },
  {
    id: 13,
    title: "The Winter Girl",
    emoji: "👧",
    background: "#f3e8ff",
    parts: [
      { id: 'wg1', name: 'Head', initialPos: [0, 5, 0], targetPos: [0, 1.4, 0], dimensions: [0.55, 0.55, 0.55], color: '#fda4af', type: 'sphere' },
      { id: 'wg2', name: 'Beanie Hat', initialPos: [0, 7, 0], targetPos: [0, 1.75, 0], dimensions: [0.6, 0.45, 0.6], color: '#4338ca', type: 'sphere' },
      { id: 'wg3', name: 'Hair Left', initialPos: [-3, 4, -2], targetPos: [-0.35, 1.3, -0.1], dimensions: [0.25, 0.8, 0.3], color: '#be123c', type: 'box', rotation: [0, 0, 0.1] },
      { id: 'wg4', name: 'Hair Right', initialPos: [3, 4, -2], targetPos: [0.35, 1.3, -0.1], dimensions: [0.25, 0.8, 0.3], color: '#be123c', type: 'box', rotation: [0, 0, -0.1] },
      { id: 'wg5', name: 'Pink Jacket', initialPos: [0, -1, 4], targetPos: [0, 0.4, 0], dimensions: [0.75, 1.0, 0.6], color: '#db2777', type: 'box' },
      { id: 'wg6', name: 'Sleeve Left', initialPos: [-4, 1, 2], targetPos: [-0.5, 0.5, 0], dimensions: [0.25, 0.8, 0.25], color: '#db2777', type: 'cylinder', rotation: [0, 0, 0.3] },
      { id: 'wg7', name: 'Sleeve Right', initialPos: [4, 1, 2], targetPos: [0.5, 0.5, 0], dimensions: [0.25, 0.8, 0.25], color: '#db2777', type: 'cylinder', rotation: [0, 0, -0.3] },
      { id: 'wg8', name: 'Skirt', initialPos: [0, -3, -2], targetPos: [0, -0.3, 0], dimensions: [0.7, 0.4, 0.5], color: '#1e3a8a', type: 'cylinder' },
      { id: 'wg9', name: 'Legs', initialPos: [0, -5, 0], targetPos: [0, -0.9, 0], dimensions: [0.3, 0.8, 0.2], color: '#172554', type: 'box' },
      { id: 'wg10', name: 'Boot Left', initialPos: [-2, -7, 2], targetPos: [-0.2, -1.4, 0.1], dimensions: [0.25, 0.3, 0.4], color: '#be185d', type: 'box' },
      { id: 'wg11', name: 'Boot Right', initialPos: [2, -7, -2], targetPos: [0.2, -1.4, 0.1], dimensions: [0.25, 0.3, 0.4], color: '#be185d', type: 'box' },
    ]
  },
  {
    id: 14,
    title: "Santa's Sleigh",
    emoji: "🛷",
    background: "#f0f9ff",
    parts: [
      // Runners
      { id: 'sl1', name: 'Runner Left', initialPos: [-4, -4, 2], targetPos: [0, -1.4, 0.6], dimensions: [3.0, 0.15, 0.1], color: '#fbbf24', type: 'box' },
      { id: 'sl2', name: 'Runner Right', initialPos: [-4, -4, -2], targetPos: [0, -1.4, -0.6], dimensions: [3.0, 0.15, 0.1], color: '#fbbf24', type: 'box' },
      { id: 'sl3', name: 'Runner Curve FL', initialPos: [4, -4, 2], targetPos: [1.6, -0.9, 0.6], dimensions: [0.1, 1.0, 0.1], color: '#fbbf24', type: 'box', rotation: [0, 0, -0.8] },
      { id: 'sl4', name: 'Runner Curve FR', initialPos: [4, -4, -2], targetPos: [1.6, -0.9, -0.6], dimensions: [0.1, 1.0, 0.1], color: '#fbbf24', type: 'box', rotation: [0, 0, -0.8] },

      // Struts
      { id: 'sl5', name: 'Strut Front', initialPos: [2, -2, 0], targetPos: [0.8, -1.0, 0], dimensions: [0.15, 0.6, 1.1], color: '#d97706', type: 'box' },
      { id: 'sl6', name: 'Strut Back', initialPos: [-2, -2, 0], targetPos: [-0.8, -1.0, 0], dimensions: [0.15, 0.6, 1.1], color: '#d97706', type: 'box' },

      // Body Base & Seat
      { id: 'sl7', name: 'Sleigh Floor', initialPos: [0, 0, 0], targetPos: [0, -0.7, 0], dimensions: [2.2, 0.2, 1.25], color: '#7f1d1d', type: 'box' },
      { id: 'sl8', name: 'Seat Cushion', initialPos: [-1, 0, 0], targetPos: [-0.5, -0.3, 0], dimensions: [1.0, 0.4, 1.1], color: '#b91c1c', type: 'box' },

      // Body Sides (The Red Shell)
      { id: 'sl9', name: 'Side Panel Left', initialPos: [0, 4, 3], targetPos: [-0.2, 0, 0.65], dimensions: [2.0, 1.2, 0.1], color: '#dc2626', type: 'box' },
      { id: 'sl10', name: 'Side Panel Right', initialPos: [0, 4, -3], targetPos: [-0.2, 0, -0.65], dimensions: [2.0, 1.2, 0.1], color: '#dc2626', type: 'box' },

      // Back & Front
      { id: 'sl11', name: 'Seat Back', initialPos: [-4, 2, 0], targetPos: [-1.2, 0.6, 0], dimensions: [0.2, 1.4, 1.2], color: '#dc2626', type: 'box', rotation: [0, 0, -0.2] },
      { id: 'sl12', name: 'Dashboard', initialPos: [4, 2, 0], targetPos: [1.0, 0.2, 0], dimensions: [0.1, 1.0, 1.2], color: '#dc2626', type: 'box', rotation: [0, 0, 0.3] },

      // Gold Trim
      { id: 'sl13', name: 'Gold Trim Left', initialPos: [-2, 5, 2], targetPos: [-0.2, 0.65, 0.7], dimensions: [2.1, 0.1, 0.05], color: '#fbbf24', type: 'box' },
      { id: 'sl14', name: 'Gold Trim Right', initialPos: [-2, 5, -2], targetPos: [-0.2, 0.65, -0.7], dimensions: [2.1, 0.1, 0.05], color: '#fbbf24', type: 'box' },

      // Cargo
      { id: 'sl15', name: 'Sack of Toys', initialPos: [-3, 6, 0], targetPos: [-0.6, 0.8, 0], dimensions: [0.95, 0, 0], color: '#d97706', type: 'sphere' },
      { id: 'sl16', name: 'Blue Gift', initialPos: [2, 5, 1], targetPos: [-0.4, 1.3, 0.3], dimensions: [0.4, 0.4, 0.4], color: '#3b82f6', type: 'box' },
      { id: 'sl17', name: 'Green Gift', initialPos: [2, 5, -1], targetPos: [-0.8, 1.2, -0.2], dimensions: [0.35, 0.5, 0.35], color: '#22c55e', type: 'box' },
    ]
  },
  {
    id: 15,
    title: "The Friendly Dog",
    emoji: "🐕",
    background: "#fff7ed",
    parts: [
      { id: 'dog1', name: 'Body', initialPos: [-3, 0, 2], targetPos: [0, 0, 0], dimensions: [1.4, 0.8, 0.7], color: '#d97706', type: 'box' },
      { id: 'dog2', name: 'Head', initialPos: [3, 2, -2], targetPos: [0.9, 0.8, 0], dimensions: [0.6, 0.6, 0.55], color: '#d97706', type: 'box' },
      { id: 'dog3', name: 'Snout', initialPos: [4, 1, 2], targetPos: [1.3, 0.7, 0], dimensions: [0.3, 0.3, 0.3], color: '#78350f', type: 'box' },
      { id: 'dog4', name: 'Left Ear', initialPos: [1, 4, 1], targetPos: [0.7, 1.2, 0.2], dimensions: [0.15, 0.4, 0.1], color: '#92400e', type: 'box' },
      { id: 'dog5', name: 'Right Ear', initialPos: [1, 4, -1], targetPos: [0.7, 1.2, -0.2], dimensions: [0.15, 0.4, 0.1], color: '#92400e', type: 'box' },
      { id: 'dog6', name: 'Leg Front Left', initialPos: [-2, -3, 3], targetPos: [0.5, -0.8, 0.25], dimensions: [0.2, 0.8, 0.2], color: '#d97706', type: 'box' },
      { id: 'dog7', name: 'Leg Front Right', initialPos: [-2, -3, -3], targetPos: [0.5, -0.8, -0.25], dimensions: [0.2, 0.8, 0.2], color: '#d97706', type: 'box' },
      { id: 'dog8', name: 'Leg Back Left', initialPos: [2, -3, 2], targetPos: [-0.5, -0.8, 0.25], dimensions: [0.2, 0.8, 0.2], color: '#d97706', type: 'box' },
      { id: 'dog9', name: 'Leg Back Right', initialPos: [2, -3, -2], targetPos: [-0.5, -0.8, -0.25], dimensions: [0.2, 0.8, 0.2], color: '#d97706', type: 'box' },
      { id: 'dog10', name: 'Tail', initialPos: [-4, 2, 0], targetPos: [-0.8, 0.3, 0], dimensions: [0.5, 0.1, 0.1], color: '#d97706', type: 'box' },
    ]
  },
  {
    id: 16,
    title: "The Ice Cream",
    emoji: "🍦",
    background: "#fff1f2",
    parts: [
      { id: 'ic1', name: 'Cone', initialPos: [0, -4, 2], targetPos: [0, -1.0, 0], dimensions: [0.6, 1.8, 0.6], color: '#fbbf24', type: 'box' },
      { id: 'ic2', name: 'Scoop 1 (Vanilla)', initialPos: [-2, 1, 3], targetPos: [0, 0.2, 0], dimensions: [0.9, 0, 0], color: '#fefce8', type: 'sphere' },
      { id: 'ic3', name: 'Scoop 2 (Strawberry)', initialPos: [2, 2, -1], targetPos: [0, 0.8, 0], dimensions: [0.8, 0, 0], color: '#f43f5e', type: 'sphere' },
      { id: 'ic4', name: 'Scoop 3 (Chocolate)', initialPos: [-3, 3, 2], targetPos: [0, 1.3, 0], dimensions: [0.6, 0, 0], color: '#78350f', type: 'sphere' },
      { id: 'ic5', name: 'Cherry', initialPos: [0, 5, 0], targetPos: [0, 1.7, 0], dimensions: [0.2, 0, 0], color: '#dc2626', type: 'sphere' },
    ]
  },
  {
    id: 17,
    title: "The Castle Tower",
    emoji: "🏰",
    background: "#e2e8f0",
    parts: [
      { id: 'ct1', name: 'Base', initialPos: [-3, -3, 3], targetPos: [0, -1.0, 0], dimensions: [1.5, 2.0, 1.5], color: '#94a3b8', type: 'box' },
      { id: 'ct2', name: 'Upper Tower', initialPos: [3, 2, -2], targetPos: [0, 1.0, 0], dimensions: [1.2, 1.5, 1.2], color: '#cbd5e1', type: 'box' },
      { id: 'ct3', name: 'Roof', initialPos: [0, 5, 2], targetPos: [0, 2.0, 0], dimensions: [1.4, 0.5, 1.4], color: '#64748b', type: 'box' },
      { id: 'ct4', name: 'Door', initialPos: [0, -3, 4], targetPos: [0, -1.5, 0.76], dimensions: [0.6, 1.0, 0.1], color: '#475569', type: 'box' },
      { id: 'ct5', name: 'Flag Pole', initialPos: [2, 6, 0], targetPos: [0, 2.5, 0], dimensions: [0.1, 1.0, 0.1], color: '#0f172a', type: 'cylinder' },
      { id: 'ct6', name: 'Flag', initialPos: [-2, 6, 0], targetPos: [0.35, 2.8, 0], dimensions: [0.6, 0.4, 0.1], color: '#dc2626', type: 'box' },
    ]
  },
  {
    id: 18,
    title: "The Steam Train",
    emoji: "🚂",
    background: "#f0f9ff",
    parts: [
      { id: 'tr1', name: 'Boiler', initialPos: [-3, 0, 3], targetPos: [0.5, 0, 0], dimensions: [0.8, 0.8, 1.8], color: '#0f172a', type: 'box' },
      { id: 'tr2', name: 'Engine Body', initialPos: [3, -1, -3], targetPos: [0.5, -0.2, 0], dimensions: [2.0, 1.0, 1.0], color: '#ef4444', type: 'box' },
      { id: 'tr3', name: 'Cabin', initialPos: [-4, 2, 2], targetPos: [-1.0, 0.5, 0], dimensions: [1.0, 1.5, 1.2], color: '#dc2626', type: 'box' },
      { id: 'tr4', name: 'Chimney', initialPos: [2, 3, -2], targetPos: [1.0, 0.8, 0], dimensions: [0.3, 0.8, 0.3], color: '#1e293b', type: 'cylinder' },
      { id: 'tr5', name: 'Wheel Front', initialPos: [2, -4, 2], targetPos: [1.0, -0.8, 0.6], dimensions: [0.4, 0.4, 0.2], color: '#334155', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'tr6', name: 'Wheel Front 2', initialPos: [2, -4, -2], targetPos: [1.0, -0.8, -0.6], dimensions: [0.4, 0.4, 0.2], color: '#334155', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'tr7', name: 'Wheel Back', initialPos: [-1, -4, 2], targetPos: [-1.0, -0.8, 0.6], dimensions: [0.5, 0.5, 0.2], color: '#334155', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'tr8', name: 'Wheel Back 2', initialPos: [-1, -4, -2], targetPos: [-1.0, -0.8, -0.6], dimensions: [0.5, 0.5, 0.2], color: '#334155', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'tr9', name: 'Cowcatcher', initialPos: [4, -3, 0], targetPos: [1.6, -0.6, 0], dimensions: [0.4, 0.6, 1.0], color: '#1e293b', type: 'box' },
    ]
  },
  {
    id: 19,
    title: "The Helicopter",
    emoji: "🚁",
    background: "#fdf4ff",
    parts: [
      { id: 'hc1', name: 'Cockpit', initialPos: [0, 0, 3], targetPos: [0.5, 0, 0], dimensions: [1.2, 1.0, 1.0], color: '#0ea5e9', type: 'box' },
      { id: 'hc2', name: 'Tail Boom', initialPos: [-4, 1, -1], targetPos: [-1.0, 0.2, 0], dimensions: [2.0, 0.3, 0.3], color: '#0369a1', type: 'box' },
      { id: 'hc3', name: 'Rotor Mast', initialPos: [0, 3, 0], targetPos: [0.5, 0.6, 0], dimensions: [0.1, 0.4, 0.1], color: '#334155', type: 'cylinder' },
      { id: 'hc4', name: 'Main Rotor Blade 1', initialPos: [3, 4, 3], targetPos: [0.5, 0.8, 0], dimensions: [3.5, 0.05, 0.2], color: '#1e293b', type: 'box' },
      { id: 'hc5', name: 'Main Rotor Blade 2', initialPos: [-3, 4, -3], targetPos: [0.5, 0.8, 0], dimensions: [0.2, 0.05, 3.5], color: '#1e293b', type: 'box' },
      { id: 'hc6', name: 'Tail Rotor', initialPos: [-4, 2, 1], targetPos: [-2.0, 0.2, 0.2], dimensions: [0.05, 0.6, 0.6], color: '#94a3b8', type: 'box' },
      { id: 'hc7', name: 'Skid Left', initialPos: [2, -3, 2], targetPos: [0.5, -0.6, 0.5], dimensions: [1.5, 0.1, 0.1], color: '#334155', type: 'box' },
      { id: 'hc8', name: 'Skid Right', initialPos: [2, -3, -2], targetPos: [0.5, -0.6, -0.5], dimensions: [1.5, 0.1, 0.1], color: '#334155', type: 'box' },
      { id: 'hc9', name: 'Skid Strut Left', initialPos: [1, -2, 1], targetPos: [0.5, -0.3, 0.4], dimensions: [0.1, 0.5, 0.1], color: '#334155', type: 'box' },
      { id: 'hc10', name: 'Skid Strut Right', initialPos: [1, -2, -1], targetPos: [0.5, -0.3, -0.4], dimensions: [0.1, 0.5, 0.1], color: '#334155', type: 'box' },
    ]
  },
  {
    id: 20,
    title: "The Mighty Dragon",
    emoji: "🐉",
    background: "#fff1f2",
    parts: [
      { id: 'dr1', name: 'Body', initialPos: [0, 0, -2], targetPos: [0, -0.5, 0], dimensions: [1.5, 0.8, 0.8], color: '#16a34a', type: 'box' },
      { id: 'dr2', name: 'Neck', initialPos: [-3, 2, 3], targetPos: [1.0, 0.5, 0], dimensions: [0.4, 0.8, 0.4], color: '#16a34a', type: 'box' },
      { id: 'dr3', name: 'Head', initialPos: [-4, 4, 1], targetPos: [1.3, 1.2, 0], dimensions: [0.7, 0.6, 0.5], color: '#15803d', type: 'box' },
      { id: 'dr4', name: 'Tail', initialPos: [4, 1, -2], targetPos: [-1.2, -0.3, 0], dimensions: [1.2, 0.4, 0.3], color: '#16a34a', type: 'box' },
      { id: 'dr5', name: 'Left Wing', initialPos: [-2, 5, -3], targetPos: [0.2, 0.5, 0.8], dimensions: [1.0, 1.2, 0.1], color: '#22c55e', type: 'box' },
      { id: 'dr6', name: 'Right Wing', initialPos: [2, 5, 3], targetPos: [0.2, 0.5, -0.8], dimensions: [1.0, 1.2, 0.1], color: '#22c55e', type: 'box' },
      { id: 'dr7', name: 'Leg Front Left', initialPos: [1, -3, 2], targetPos: [0.8, -1.0, 0.5], dimensions: [0.2, 0.6, 0.2], color: '#15803d', type: 'box' },
      { id: 'dr8', name: 'Leg Front Right', initialPos: [1, -3, -2], targetPos: [0.8, -1.0, -0.5], dimensions: [0.2, 0.6, 0.2], color: '#15803d', type: 'box' },
      { id: 'dr9', name: 'Leg Back Left', initialPos: [-1, -3, 2], targetPos: [-0.6, -1.0, 0.5], dimensions: [0.2, 0.6, 0.2], color: '#15803d', type: 'box' },
      { id: 'dr10', name: 'Leg Back Right', initialPos: [-1, -3, -2], targetPos: [-0.6, -1.0, -0.5], dimensions: [0.2, 0.6, 0.2], color: '#15803d', type: 'box' },
      { id: 'dr11', name: 'Fire Breath', initialPos: [3, 3, 3], targetPos: [1.8, 1.0, 0], dimensions: [0.5, 0.3, 0.3], color: '#fca5a5', type: 'sphere' },
    ]
  },
  {
    id: 21,
    title: "The Electric Guitar",
    emoji: "🎸",
    background: "#fdf2f8",
    parts: [
      { id: 'eg1', name: 'Guitar Body', initialPos: [-3, -2, 2], targetPos: [0, -0.5, 0], dimensions: [1.0, 1.4, 0.3], color: '#be123c', type: 'box' },
      { id: 'eg2', name: 'Neck', initialPos: [3, 2, -3], targetPos: [0, 1.2, 0], dimensions: [0.25, 2.0, 0.15], color: '#fcd34d', type: 'box' },
      { id: 'eg3', name: 'Headstock', initialPos: [0, 5, 2], targetPos: [0, 2.4, 0], dimensions: [0.4, 0.5, 0.15], color: '#fcd34d', type: 'box' },
      { id: 'eg4', name: 'Bridge', initialPos: [-2, -4, 1], targetPos: [0, -0.8, 0.16], dimensions: [0.3, 0.1, 0.05], color: '#cbd5e1', type: 'box' },
      { id: 'eg5', name: 'Pickups', initialPos: [2, -4, -1], targetPos: [0, -0.2, 0.16], dimensions: [0.25, 0.4, 0.05], color: '#1e293b', type: 'box' },
      { id: 'eg6', name: 'Volume Knobs', initialPos: [4, -3, 0], targetPos: [0.3, -0.9, 0.16], dimensions: [0.1, 0.05, 0.05], color: '#0f172a', type: 'cylinder' },
    ]
  },
  {
    id: 22,
    title: "Santa's Elf",
    emoji: "🧝",
    background: "#f0fdf4",
    parts: [
      // Boots
      { id: 'ef1', name: 'Boot Left', initialPos: [-3, -4, 2], targetPos: [-0.4, -1.5, 0.1], dimensions: [0.35, 0.4, 0.5], color: '#78350f', type: 'box' }, // Brown
      { id: 'ef2', name: 'Boot Right', initialPos: [3, -4, -2], targetPos: [0.4, -1.5, 0.1], dimensions: [0.35, 0.4, 0.5], color: '#78350f', type: 'box' },

      // Legs (Green Tights)
      { id: 'ef3', name: 'Legs', initialPos: [0, -5, 0], targetPos: [0, -1.0, 0], dimensions: [0.35, 0.7, 0.25], color: '#16a34a', type: 'box' },                 // Green
      { id: 'ef4', name: 'Leg Left', initialPos: [-2, -3, 0], targetPos: [-0.4, -1.0, 0], dimensions: [0.3, 0.7, 0.25], color: '#16a34a', type: 'box' },

      // Torso (Red Coat)
      { id: 'ef5', name: 'Torso', initialPos: [0, 0, 3], targetPos: [0, -0.3, 0], dimensions: [1.1, 0.9, 0.7], color: '#dc2626', type: 'box' },                  // Red
      { id: 'ef6', name: 'Belt', initialPos: [-3, 0, 0], targetPos: [0, -0.6, 0], dimensions: [1.15, 0.15, 0.75], color: '#171717', type: 'box' },               // Black
      { id: 'ef7', name: 'Buckle', initialPos: [0, -1, 4], targetPos: [0, -0.6, 0.4], dimensions: [0.25, 0.25, 0.1], color: '#facc15', type: 'box' },             // Gold

      // Head Area
      { id: 'ef8', name: 'Head', initialPos: [0, 3, -1], targetPos: [0, 0.5, 0], dimensions: [0.65, 0.65, 0.6], color: '#fdba74', type: 'sphere' },             // Skin
      { id: 'ef9', name: 'Beard', initialPos: [0, 2, 2], targetPos: [0, 0.35, 0.25], dimensions: [0.7, 0.35, 0.2], color: '#f8fafc', type: 'box' },              // White
      { id: 'ef10', name: 'Nose', initialPos: [0, 3, 3], targetPos: [0, 0.55, 0.35], dimensions: [0.08, 0, 0], color: '#fdba74', type: 'sphere' },               // Skin Nose
      { id: 'ef11', name: 'Left Ear', initialPos: [-2, 4, 0], targetPos: [-0.35, 0.6, 0], dimensions: [0.15, 0.3, 0.1], color: '#fdba74', type: 'cylinder', rotation: [0, 0, 0.5] },
      { id: 'ef12', name: 'Right Ear', initialPos: [2, 4, 0], targetPos: [0.35, 0.6, 0], dimensions: [0.15, 0.3, 0.1], color: '#fdba74', type: 'cylinder', rotation: [0, 0, -0.5] },

      // Hat
      { id: 'ef13', name: 'Hat Trim', initialPos: [0, 5, -2], targetPos: [0, 0.85, 0], dimensions: [0.8, 0.15, 0.8], color: '#f8fafc', type: 'cylinder' },       // White
      { id: 'ef14', name: 'Hat Cone', initialPos: [-4, 4, -2], targetPos: [0, 1.3, 0], dimensions: [0.6, 0.8, 0.6], color: '#dc2626', type: 'cylinder' },          // Red
      { id: 'ef15', name: 'Hat PomPom', initialPos: [4, 6, 0], targetPos: [0, 1.75, 0], dimensions: [0.15, 0, 0], color: '#f8fafc', type: 'sphere' },             // White

      // Arms
      { id: 'ef16', name: 'Arm Left', initialPos: [-3, 1, 2], targetPos: [-0.65, 0.1, 0], dimensions: [0.2, 0.6, 0.2], color: '#dc2626', type: 'box', rotation: [0, 0, 0.3] },
      { id: 'ef17', name: 'Arm Right', initialPos: [3, 1, 2], targetPos: [0.65, 0.1, 0], dimensions: [0.2, 0.6, 0.2], color: '#dc2626', type: 'box', rotation: [0, 0, -0.3] },
      { id: 'ef18', name: 'Mitten Left', initialPos: [-4, 0, 3], targetPos: [-0.8, -0.25, 0.1], dimensions: [0.2, 0, 0], color: '#16a34a', type: 'sphere' },    // Green
      { id: 'ef19', name: 'Mitten Right', initialPos: [4, 0, 3], targetPos: [0.8, -0.25, 0.1], dimensions: [0.2, 0, 0], color: '#16a34a', type: 'sphere' },    // Green
    ]
  },
  {
    id: 23,
    title: "Christmas Reindeer",
    emoji: "🦌",
    background: "#f1f5f9",
    parts: [
      // Body Segments
      { id: 'rd1', name: 'Torso Front (White)', initialPos: [0, -2, 4], targetPos: [0.3, -0.2, 0], dimensions: [1.0, 1.15, 0.95], color: '#f8fafc', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'rd2', name: 'Torso Back (Tan)', initialPos: [-3, -2, -2], targetPos: [-0.9, -0.15, 0], dimensions: [1.0, 1.1, 1.0], color: '#d4a373', type: 'sphere' },

      // Neck & Head
      { id: 'rd3', name: 'Neck', initialPos: [4, 2, 0], targetPos: [1.2, 0.8, 0], dimensions: [0.5, 1.2, 0.6], color: '#f8fafc', type: 'box', rotation: [0, 0, -0.4] },
      { id: 'rd4', name: 'Head', initialPos: [5, 5, 0], targetPos: [1.6, 1.8, 0], dimensions: [0.7, 0.5, 0.45], color: '#d4a373', type: 'box', rotation: [0.2, 0, 0] },
      { id: 'rd5', name: 'Muzzle', initialPos: [6, 4, 0], targetPos: [2.0, 1.7, 0], dimensions: [0.3, 0.35, 0.35], color: '#f1f5f9', type: 'box', rotation: [0.2, 0, 0] },
      { id: 'rd6', name: 'Nose', initialPos: [6, 4, 1], targetPos: [2.2, 1.8, 0], dimensions: [0.15, 0, 0], color: '#1e293b', type: 'sphere' },

      // Antlers
      { id: 'rd7', name: 'Antler Left', initialPos: [2, 7, 3], targetPos: [1.4, 2.8, 0.4], dimensions: [1.4, 1.8, 0.1], color: '#fcd34d', type: 'box', rotation: [0, 0, 0.6] },
      { id: 'rd8', name: 'Antler Right', initialPos: [2, 7, -3], targetPos: [1.4, 2.8, -0.4], dimensions: [1.4, 1.8, 0.1], color: '#fcd34d', type: 'box', rotation: [0, 0, 0.6] },

      // Legs
      { id: 'rd9', name: 'Leg Front Left', initialPos: [2, -5, 2], targetPos: [1.0, -1.4, 0.35], dimensions: [0.22, 1.2, 0.22], color: '#d4a373', type: 'cylinder' },
      { id: 'rd10', name: 'Leg Front Right', initialPos: [2, -5, -2], targetPos: [1.0, -1.4, -0.35], dimensions: [0.22, 1.2, 0.22], color: '#d4a373', type: 'cylinder' },
      { id: 'rd11', name: 'Leg Back Left', initialPos: [-2, -5, 2], targetPos: [-1.0, -1.4, 0.4], dimensions: [0.25, 1.1, 0.25], color: '#d4a373', type: 'cylinder', rotation: [0, 0, -0.2] },
      { id: 'rd12', name: 'Leg Back Right', initialPos: [-2, -5, -2], targetPos: [-1.0, -1.4, -0.4], dimensions: [0.25, 1.1, 0.25], color: '#d4a373', type: 'cylinder', rotation: [0, 0, -0.2] },

      // Harness & Decor
      { id: 'rd13', name: 'Harness Strap', initialPos: [0, 2, 4], targetPos: [0.4, -0.2, 0], dimensions: [0.2, 1.2, 1.0], color: '#dc2626', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'rd14', name: 'Collar', initialPos: [3, 3, -3], targetPos: [1.25, 1.1, 0], dimensions: [0.65, 0.15, 0.65], color: '#dc2626', type: 'cylinder', rotation: [0, 0, -0.4] },
      { id: 'rd15', name: 'Chest Bell', initialPos: [2, 0, 0], targetPos: [1.0, 0.4, 0], dimensions: [0.25, 0, 0], color: '#facc15', type: 'sphere' },
    ]
  },
  {
    id: 24,
    title: "Vintage Hot Rod",
    emoji: "🏎️",
    background: "#e2e8f0",
    parts: [
      // Main Body (Sleeker Proportions)
      { id: 'hr1', name: 'Body Main', initialPos: [0, -2, 4], targetPos: [0, -0.2, 0], dimensions: [2.2, 0.7, 1.1], color: '#f59e0b', type: 'box' }, // Long X, Narrow Z
      { id: 'hr2', name: 'Cabin Roof', initialPos: [-3, 3, -1], targetPos: [-0.4, 0.6, 0], dimensions: [1.2, 0.6, 1.0], color: '#f59e0b', type: 'box' },

      // Front Grille
      { id: 'hr3', name: 'Front Grille', initialPos: [4, 0, 0], targetPos: [1.2, -0.1, 0], dimensions: [0.15, 0.9, 0.7], color: '#e2e8f0', type: 'box' },

      // Engine (Detailed)
      { id: 'hr4', name: 'Engine Block', initialPos: [0, 5, 0], targetPos: [0.6, 0.25, 0], dimensions: [0.9, 0.6, 0.6], color: '#94a3b8', type: 'box' },
      { id: 'hr5', name: 'Air Intake', initialPos: [0, 6, 0], targetPos: [0.6, 0.65, 0], dimensions: [0.4, 0.2, 0.3], color: '#cbd5e1', type: 'box' },

      // Exhausts (Fixed Dimensions: Radius, Radius, Height) - Rotated to run along X
      { id: 'hr6', name: 'Exhaust Left', initialPos: [-2, -4, 2], targetPos: [0.2, -0.6, 0.65], dimensions: [0.12, 0.12, 2.0], color: '#cbd5e1', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'hr7', name: 'Exhaust Right', initialPos: [-2, -4, -2], targetPos: [0.2, -0.6, -0.65], dimensions: [0.12, 0.12, 2.0], color: '#cbd5e1', type: 'cylinder', rotation: [0, 0, 1.57] },

      // Wheels (With Rims for realism)
      // Rear Left
      { id: 'hr8', name: 'Rear Tire L', initialPos: [-3, -3, 3], targetPos: [-1.0, -0.5, 0.85], dimensions: [0.75, 0.75, 0.6], color: '#171717', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'hr9', name: 'Rear Rim L', initialPos: [-4, -2, 3], targetPos: [-1.0, -0.5, 0.86], dimensions: [0.45, 0.45, 0.62], color: '#cbd5e1', type: 'cylinder', rotation: [1.57, 0, 0] },

      // Rear Right
      { id: 'hr10', name: 'Rear Tire R', initialPos: [-3, -3, -3], targetPos: [-1.0, -0.5, -0.85], dimensions: [0.75, 0.75, 0.6], color: '#171717', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'hr11', name: 'Rear Rim R', initialPos: [-4, -2, -3], targetPos: [-1.0, -0.5, -0.86], dimensions: [0.45, 0.45, 0.62], color: '#cbd5e1', type: 'cylinder', rotation: [1.57, 0, 0] },

      // Front Left
      { id: 'hr12', name: 'Front Tire L', initialPos: [3, -3, 3], targetPos: [1.6, -0.8, 0.85], dimensions: [0.5, 0.5, 0.35], color: '#171717', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'hr13', name: 'Front Rim L', initialPos: [4, -2, 3], targetPos: [1.6, -0.8, 0.86], dimensions: [0.3, 0.3, 0.37], color: '#cbd5e1', type: 'cylinder', rotation: [1.57, 0, 0] },

      // Front Right
      { id: 'hr14', name: 'Front Tire R', initialPos: [3, -3, -3], targetPos: [1.6, -0.8, -0.85], dimensions: [0.5, 0.5, 0.35], color: '#171717', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'hr15', name: 'Front Rim R', initialPos: [4, -2, -3], targetPos: [1.6, -0.8, -0.86], dimensions: [0.3, 0.3, 0.37], color: '#cbd5e1', type: 'cylinder', rotation: [1.57, 0, 0] },

      // Details
      { id: 'hr16', name: 'Headlight L', initialPos: [4, 2, 2], targetPos: [1.3, 0.1, 0.45], dimensions: [0.15, 0, 0], color: '#fef3c7', type: 'sphere' },
      { id: 'hr17', name: 'Headlight R', initialPos: [4, 2, -2], targetPos: [1.3, 0.1, -0.45], dimensions: [0.15, 0, 0], color: '#fef3c7', type: 'sphere' },
      { id: 'hr18', name: 'Windows', initialPos: [-2, 4, 2], targetPos: [-0.4, 0.6, 0], dimensions: [1.22, 0.3, 1.02], color: '#1e293b', type: 'box' },
    ]
  },
  {
    id: 25,
    title: "Simple Biplane",
    emoji: "🛩️",
    background: "#f0fdf4",
    parts: [
      // Simple Box Fuselage (No weird cones)
      { id: 'bp1', name: 'Fuselage Body', initialPos: [-4, -2, 0], targetPos: [0, 0, 0], dimensions: [3.8, 0.7, 0.75], color: '#d97706', type: 'box' }, // Amber/Wood color

      // Engine Block (Square front)
      { id: 'bp2', name: 'Engine Front', initialPos: [4, -2, 0], targetPos: [1.95, 0, 0], dimensions: [0.1, 0.65, 0.65], color: '#171717', type: 'box' },

      // Wings (Simple Rectangles)
      { id: 'bp3', name: 'Top Wing', initialPos: [0, 5, 0], targetPos: [0.5, 0.8, 0], dimensions: [1.2, 0.1, 3.2], color: '#fcd34d', type: 'box' }, // Yellow
      { id: 'bp4', name: 'Bottom Wing', initialPos: [0, -4, 0], targetPos: [0.5, -0.4, 0], dimensions: [1.2, 0.1, 3.2], color: '#fcd34d', type: 'box' },

      // Wing Struts (Connecting wings)
      { id: 'bp5', name: 'Strut Left', initialPos: [2, 0, 2], targetPos: [0.5, 0.2, 1.2], dimensions: [0.1, 1.2, 0.1], color: '#78350f', type: 'box' },
      { id: 'bp6', name: 'Strut Right', initialPos: [2, 0, -2], targetPos: [0.5, 0.2, -1.2], dimensions: [0.1, 1.2, 0.1], color: '#78350f', type: 'box' },

      // Tail Section
      { id: 'bp7', name: 'Tail Fin', initialPos: [-4, 3, 0], targetPos: [-1.6, 0.6, 0], dimensions: [0.8, 0.7, 0.1], color: '#fcd34d', type: 'box' },
      { id: 'bp8', name: 'Horizontal Stabilizer', initialPos: [-4, 0, 2], targetPos: [-1.6, 0.1, 0], dimensions: [0.6, 0.1, 1.6], color: '#fcd34d', type: 'box' },

      // Propeller (Simple Blade)
      { id: 'bp9', name: 'Propeller Blade', initialPos: [4, 2, 0], targetPos: [2.1, 0, 0], dimensions: [0.1, 2.0, 0.2], color: '#171717', type: 'box' },
      { id: 'bp10', name: 'Propeller Cap', initialPos: [5, 2, 0], targetPos: [2.15, 0, 0], dimensions: [0.15, 0, 0], color: '#dc2626', type: 'sphere' },

      // Cockpit
      { id: 'bp11', name: 'Cockpit Cutout', initialPos: [0, 3, 0], targetPos: [-0.5, 0.4, 0], dimensions: [0.6, 0.1, 0.5], color: '#171717', type: 'box' },

      // Simple Wheels
      { id: 'bp12', name: 'Wheel Axle', initialPos: [1, -3, 0], targetPos: [0.8, -0.6, 0], dimensions: [0.1, 0.1, 1.0], color: '#171717', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'bp13', name: 'Wheel Left', initialPos: [1, -5, 2], targetPos: [0.8, -0.6, 0.5], dimensions: [0.4, 0.4, 0.2], color: '#171717', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'bp14', name: 'Wheel Right', initialPos: [1, -5, -2], targetPos: [0.8, -0.6, -0.5], dimensions: [0.4, 0.4, 0.2], color: '#171717', type: 'cylinder', rotation: [1.57, 0, 0] },
    ]
  },
  {
    id: 26,
    title: "Container Ship",
    emoji: "🚢",
    background: "#f0f9ff",
    parts: [
      // Hull
      { id: 'cs1', name: 'Hull Bottom', initialPos: [0, -5, 0], targetPos: [0, -1.5, 0], dimensions: [4.5, 0.8, 1.4], color: '#14532d', type: 'box' }, // Dark Green
      { id: 'cs2', name: 'Hull Middle', initialPos: [0, -3, 4], targetPos: [0, -0.7, 0], dimensions: [4.6, 0.8, 1.5], color: '#f8fafc', type: 'box' }, // White wall

      // Bow
      { id: 'cs3', name: 'Bow Tip', initialPos: [5, -2, 0], targetPos: [2.5, -0.7, 0], dimensions: [0.6, 0.8, 1.3], color: '#f8fafc', type: 'box', rotation: [0, 0, 0.3] }, // Angled white bow

      // Superstructure (Bridge)
      { id: 'cs4', name: 'Bridge Tower', initialPos: [-5, 3, 0], targetPos: [-1.8, 0.8, 0], dimensions: [0.8, 1.8, 1.2], color: '#f8fafc', type: 'box' },
      { id: 'cs5', name: 'Bridge Windows', initialPos: [-5, 5, 2], targetPos: [-1.8, 1.4, 0.65], dimensions: [0.7, 0.2, 0.1], color: '#1e293b', type: 'box' },
      { id: 'cs6', name: 'Funnel', initialPos: [-5, 6, 0], targetPos: [-2.0, 2.0, 0], dimensions: [0.3, 0.6, 0.4], color: '#f97316', type: 'cylinder' }, // Orange funnel

      // Containers (Stacks)
      // Stack 1 (Front)
      { id: 'cs7', name: 'Container Red', initialPos: [3, 2, 3], targetPos: [1.5, 0.2, 0.3], dimensions: [0.8, 0.5, 0.5], color: '#ef4444', type: 'box' },
      { id: 'cs8', name: 'Container Blue', initialPos: [3, 2, -3], targetPos: [1.5, 0.2, -0.3], dimensions: [0.8, 0.5, 0.5], color: '#3b82f6', type: 'box' },

      // Stack 2 (Mid)
      { id: 'cs9', name: 'Container Green', initialPos: [1, 4, 3], targetPos: [0.5, 0.2, 0.3], dimensions: [0.8, 0.5, 0.5], color: '#22c55e', type: 'box' },
      { id: 'cs10', name: 'Container Yellow', initialPos: [1, 4, -3], targetPos: [0.5, 0.2, -0.3], dimensions: [0.8, 0.5, 0.5], color: '#eab308', type: 'box' },

      // Stack 3 (Top/Misc)
      { id: 'cs11', name: 'Container Grey', initialPos: [2, 6, 0], targetPos: [1.0, 0.7, 0], dimensions: [0.8, 0.5, 0.5], color: '#64748b', type: 'box' },

      // Details
      { id: 'cs12', name: 'Mast Radar', initialPos: [-4, 7, 0], targetPos: [-1.8, 2.1, 0], dimensions: [0.05, 0.8, 0.05], color: '#94a3b8', type: 'cylinder' },
    ]
  },
  {
    id: 27,
    title: "Vintage Camera",
    emoji: "📷",
    background: "#f3f4f6",
    parts: [
      { id: 'cm1', name: 'Camera Body', initialPos: [0, -2, 4], targetPos: [0, 0, 0], dimensions: [2.0, 1.2, 0.6], color: '#1f2937', type: 'box' },
      { id: 'cm2', name: 'Lens Base', initialPos: [0, 2, -4], targetPos: [0, 0, 0.4], dimensions: [0.8, 0.2, 0.8], color: '#374151', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'cm3', name: 'Lens Glass', initialPos: [0, 4, 2], targetPos: [0, 0, 0.6], dimensions: [0.6, 0.1, 0.6], color: '#3b82f6', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'cm4', name: 'Flash Mount', initialPos: [-3, 3, 0], targetPos: [0.6, 0.8, 0], dimensions: [0.4, 0.4, 0.4], color: '#9ca3af', type: 'box' },
      { id: 'cm5', name: 'Shutter Button', initialPos: [3, 3, 0], targetPos: [-0.6, 0.7, 0], dimensions: [0.2, 0.2, 0.2], color: '#ef4444', type: 'cylinder' },
      { id: 'cm6', name: 'Viewfinder', initialPos: [-2, 1, -2], targetPos: [0, 0.8, -0.1], dimensions: [0.4, 0.3, 0.4], color: '#000000', type: 'box' },
      { id: 'cm7', name: 'Grip', initialPos: [2, -2, 2], targetPos: [-0.8, 0, 0.35], dimensions: [0.3, 1.0, 0.1], color: '#374151', type: 'box' },
    ]
  },
  {
    id: 28,
    title: "Treasure Chest",
    emoji: "💎",
    background: "#fffbeb",
    parts: [
      { id: 'tc1', name: 'Chest Base', initialPos: [-4, -2, 0], targetPos: [0, -0.5, 0], dimensions: [2.0, 1.0, 1.2], color: '#78350f', type: 'box' },
      { id: 'tc2', name: 'Chest Lid', initialPos: [4, 2, 0], targetPos: [0, 0.5, 0], dimensions: [2.0, 0.4, 1.2], color: '#92400e', type: 'cylinder' },
      { id: 'tc3', name: 'Lock', initialPos: [0, 0, 4], targetPos: [0, 0, 0.65], dimensions: [0.3, 0.4, 0.1], color: '#facc15', type: 'box' },
      { id: 'tc4', name: 'Gold Band Left', initialPos: [-2, 4, -2], targetPos: [-0.7, -0.5, 0], dimensions: [0.2, 1.1, 1.25], color: '#facc15', type: 'box' },
      { id: 'tc5', name: 'Gold Band Right', initialPos: [2, 4, 2], targetPos: [0.7, -0.5, 0], dimensions: [0.2, 1.1, 1.25], color: '#facc15', type: 'box' },
      { id: 'tc6', name: 'Gemstone Red', initialPos: [-3, -4, 2], targetPos: [-0.4, 0.1, 0], dimensions: [0.2, 0.2, 0.2], color: '#dc2626', type: 'box' },
      { id: 'tc7', name: 'Gemstone Blue', initialPos: [3, -4, -2], targetPos: [0.4, 0.1, -0.1], dimensions: [0.2, 0.2, 0.2], color: '#2563eb', type: 'box' },
      { id: 'tc8', name: 'Gold Coins', initialPos: [0, -3, -3], targetPos: [0, 0.1, 0.3], dimensions: [1.0, 0.1, 0.4], color: '#facc15', type: 'box' },
    ]
  },
  {
    id: 29,
    title: "The T-Rex",
    emoji: "🦖",
    background: "#ecfccb",
    parts: [
      { id: 'rx1', name: 'Main Body', initialPos: [0, 0, 4], targetPos: [0, 0, 0], dimensions: [1.2, 1.0, 1.6], color: '#4d7c0f', type: 'box' },
      { id: 'rx2', name: 'Head', initialPos: [-3, 4, -1], targetPos: [0, 1.6, 0.8], dimensions: [0.8, 1.0, 1.0], color: '#4d7c0f', type: 'box' },
      { id: 'rx3', name: 'Tail', initialPos: [3, -2, -4], targetPos: [0, -0.5, -1.5], dimensions: [0.6, 0.6, 1.4], color: '#3f6212', type: 'box' },
      { id: 'rx4', name: 'Leg Left', initialPos: [-4, -3, 2], targetPos: [-0.6, -1.2, 0], dimensions: [0.5, 1.4, 0.6], color: '#3f6212', type: 'box' },
      { id: 'rx5', name: 'Leg Right', initialPos: [4, -3, 2], targetPos: [0.6, -1.2, 0], dimensions: [0.5, 1.4, 0.6], color: '#3f6212', type: 'box' },
      { id: 'rx6', name: 'Tiny Arm Left', initialPos: [-2, 1, 3], targetPos: [-0.6, 0.2, 0.6], dimensions: [0.2, 0.4, 0.2], color: '#4d7c0f', type: 'box' },
      { id: 'rx7', name: 'Tiny Arm Right', initialPos: [2, 1, 3], targetPos: [0.6, 0.2, 0.6], dimensions: [0.2, 0.4, 0.2], color: '#4d7c0f', type: 'box' },
      { id: 'rx8', name: 'Jaw', initialPos: [0, 2, 2], targetPos: [0, 1.2, 1.0], dimensions: [0.7, 0.3, 0.8], color: '#65a30d', type: 'box' },
    ]
  },
  {
    id: 30,
    title: "Grand Piano",
    emoji: "🎹",
    background: "#f8fafc",
    parts: [
      { id: 'pn1', name: 'Piano Body', initialPos: [0, 0, -4], targetPos: [0, 0, 0], dimensions: [1.8, 0.6, 1.5], color: '#000000', type: 'box' },
      { id: 'pn2', name: 'Keyboard', initialPos: [0, -2, 4], targetPos: [0, -0.1, 0.9], dimensions: [1.4, 0.2, 0.4], color: '#ffffff', type: 'box' },
      { id: 'pn3', name: 'Lid', initialPos: [-3, 4, 0], targetPos: [0, 1.0, -0.5], dimensions: [1.7, 0.1, 1.4], color: '#000000', type: 'box' },
      { id: 'pn4', name: 'Leg Front Left', initialPos: [-4, -3, 3], targetPos: [-0.8, -1.0, 0.6], dimensions: [0.2, 1.4, 0.2], color: '#000000', type: 'cylinder' },
      { id: 'pn5', name: 'Leg Front Right', initialPos: [4, -3, 3], targetPos: [0.8, -1.0, 0.6], dimensions: [0.2, 1.4, 0.2], color: '#000000', type: 'cylinder' },
      { id: 'pn6', name: 'Leg Back', initialPos: [0, -3, -3], targetPos: [0, -1.0, -0.6], dimensions: [0.2, 1.4, 0.2], color: '#000000', type: 'cylinder' },
      { id: 'pn7', name: 'Music Stand', initialPos: [0, 2, 2], targetPos: [0, 0.5, 0.7], dimensions: [0.6, 0.4, 0.1], color: '#000000', type: 'box' },
      { id: 'pn8', name: 'Bench', initialPos: [2, -4, 4], targetPos: [0, -1.0, 1.8], dimensions: [0.8, 0.8, 0.4], color: '#000000', type: 'box' },
    ]
  },
  {
    id: 31,
    title: "The Red Apple",
    emoji: "🍎",
    background: "#fef2f2",
    parts: [
      { id: 'ap1', name: 'Apple Body', initialPos: [0, -3, 3], targetPos: [0, 0, 0], dimensions: [1.2, 1.1, 1.2], color: '#dc2626', type: 'sphere' },
      { id: 'ap2', name: 'Stem', initialPos: [2, 4, -1], targetPos: [0, 0.9, 0], dimensions: [0.1, 0.4, 0.1], color: '#451a03', type: 'cylinder' },
      { id: 'ap3', name: 'Leaf', initialPos: [-2, 4, 1], targetPos: [0.3, 0.9, 0], dimensions: [0.4, 0.1, 0.2], color: '#65a30d', type: 'box' },
    ]
  },
  {
    id: 32,
    title: "The Golden Sword",
    emoji: "⚔️",
    background: "#f0f9ff",
    parts: [
      { id: 'sw1', name: 'Blade', initialPos: [-3, 3, 0], targetPos: [0, 0.5, 0], dimensions: [0.3, 2.0, 0.1], color: '#cbd5e1', type: 'box' },
      { id: 'sw2', name: 'Guard', initialPos: [3, -1, 0], targetPos: [0, -0.6, 0], dimensions: [1.0, 0.2, 0.2], color: '#facc15', type: 'box' },
      { id: 'sw3', name: 'Handle', initialPos: [0, -4, 2], targetPos: [0, -1.0, 0], dimensions: [0.2, 0.6, 0.2], color: '#713f12', type: 'cylinder' },
      { id: 'sw4', name: 'Pommel', initialPos: [0, -5, -2], targetPos: [0, -1.4, 0], dimensions: [0.3, 0, 0], color: '#facc15', type: 'sphere' },
    ]
  },
  {
    id: 33,
    title: "The Pizza Slice",
    emoji: "🍕",
    background: "#fff7ed",
    parts: [
      { id: 'pz1', name: 'Wooden Board', initialPos: [0, -4, 0], targetPos: [0, -1.5, 0], dimensions: [3.2, 0.2, 3.5], color: '#92400e', type: 'box' },
      { id: 'pz2', name: 'Crust Arc', initialPos: [0, -2, -3], targetPos: [0, -0.8, -1.2], dimensions: [2.2, 0.5, 0.6], color: '#d97706', type: 'box' },
      { id: 'pz3', name: 'Slice Left', initialPos: [-3, 0, 0], targetPos: [-0.45, -0.8, 0.3], dimensions: [0.9, 0.3, 2.8], color: '#fef3c7', type: 'box', rotation: [0, -0.35, 0] },
      { id: 'pz4', name: 'Slice Right', initialPos: [3, 0, 0], targetPos: [0.45, -0.8, 0.3], dimensions: [0.9, 0.3, 2.8], color: '#fef3c7', type: 'box', rotation: [0, 0.35, 0] },
      { id: 'pz5', name: 'Pepperoni A', initialPos: [-1, 3, 1], targetPos: [-0.3, -0.64, 0.5], dimensions: [0.4, 0.05, 0.4], color: '#b91c1c', type: 'cylinder' },
      { id: 'pz6', name: 'Pepperoni B', initialPos: [1, 3, 0], targetPos: [0.3, -0.64, -0.2], dimensions: [0.4, 0.05, 0.4], color: '#b91c1c', type: 'cylinder' },
      { id: 'pz7', name: 'Basil Leaf', initialPos: [0, 4, 3], targetPos: [0, -0.6, 1.2], dimensions: [0.3, 0.02, 0.15], color: '#16a34a', type: 'sphere' },
      { id: 'pz8', name: 'Black Olive', initialPos: [2, 2, 2], targetPos: [0.1, -0.6, 0.8], dimensions: [0.12, 0, 0], color: '#171717', type: 'sphere' },
      { id: 'pz9', name: 'Green Pepper', initialPos: [-2, 2, -1], targetPos: [-0.5, -0.62, -0.5], dimensions: [0.1, 0.1, 0.5], color: '#15803d', type: 'cylinder', rotation: [0, 0.5, 1.57] },
      { id: 'pz10', name: 'Dripping Cheese', initialPos: [2, -1, 3], targetPos: [0.85, -0.9, 0.3], dimensions: [0.2, 0.4, 0.2], color: '#fef3c7', type: 'capsule' },
      { id: 'pz11', name: 'Steam Puff', initialPos: [-1, 5, -1], targetPos: [-0.2, 0.5, 0], dimensions: [0.2, 0, 0], color: '#ffffff', type: 'sphere' },
    ]
  },
  {
    id: 34,
    title: "Saguaro Cactus",
    emoji: "🌵",
    background: "#ecfccb",
    parts: [
      { id: 'cc1', name: 'Main Stem', initialPos: [0, -3, 3], targetPos: [0, 0, 0], dimensions: [0.5, 2.5, 0.5], color: '#16a34a', type: 'capsule' },
      { id: 'cc2', name: 'Right Arm', initialPos: [2, 1, -2], targetPos: [0.6, 0.5, 0], dimensions: [0.3, 0.8, 0.3], color: '#16a34a', type: 'capsule' },
      { id: 'cc3', name: 'Left Arm', initialPos: [-3, -1, -2], targetPos: [-0.6, -0.2, 0], dimensions: [0.3, 0.8, 0.3], color: '#16a34a', type: 'capsule' },
      { id: 'cc4', name: 'Pot', initialPos: [0, -4, 0], targetPos: [0, -1.8, 0], dimensions: [1.0, 0.8, 1.0], color: '#ea580c', type: 'cylinder' },
    ]
  },
  {
    id: 35,
    title: "Sunflower",
    emoji: "🌻",
    background: "#fefce8",
    parts: [
      { id: 'sf1', name: 'Stem', initialPos: [0, -4, 2], targetPos: [0, -1.0, 0], dimensions: [0.15, 2.0, 0.15], color: '#16a34a', type: 'cylinder' },
      { id: 'sf2', name: 'Center', initialPos: [0, 3, -1], targetPos: [0, 0.5, 0.1], dimensions: [0.8, 0.8, 0.2], color: '#451a03', type: 'cylinder' },
      { id: 'sf3', name: 'Petals Top', initialPos: [0, 4, 2], targetPos: [0, 1.1, 0], dimensions: [0.3, 0.6, 0.05], color: '#facc15', type: 'box' },
      { id: 'sf4', name: 'Petals Bottom', initialPos: [0, -1, -2], targetPos: [0, -0.1, 0], dimensions: [0.3, 0.6, 0.05], color: '#facc15', type: 'box' },
      { id: 'sf5', name: 'Petals Left', initialPos: [-2, 2, 2], targetPos: [-0.6, 0.5, 0], dimensions: [0.6, 0.3, 0.05], color: '#facc15', type: 'box' },
      { id: 'sf6', name: 'Petals Right', initialPos: [2, 2, 2], targetPos: [0.6, 0.5, 0], dimensions: [0.6, 0.3, 0.05], color: '#facc15', type: 'box' },
      { id: 'sf7', name: 'Leaf Left', initialPos: [-1, -2, 1], targetPos: [-0.4, -1.0, 0], dimensions: [0.5, 0.2, 0.05], color: '#16a34a', type: 'box' },
      { id: 'sf8', name: 'Leaf Right', initialPos: [1, -2, -1], targetPos: [0.4, -0.5, 0], dimensions: [0.5, 0.2, 0.05], color: '#16a34a', type: 'box' },
    ]
  },
  {
    id: 36,
    title: "Retro Microphone",
    emoji: "🎤",
    background: "#f3f4f6",
    parts: [
      { id: 'mc1', name: 'Stand Base', initialPos: [0, -4, 0], targetPos: [0, -1.8, 0], dimensions: [1.2, 0.2, 1.2], color: '#334155', type: 'cylinder' },
      { id: 'mc2', name: 'Stand Pole', initialPos: [0, -2, 3], targetPos: [0, -0.8, 0], dimensions: [0.15, 2.0, 0.15], color: '#94a3b8', type: 'cylinder' },
      { id: 'mc3', name: 'Mic Body', initialPos: [0, 0, -3], targetPos: [0, 0.8, 0], dimensions: [0.6, 1.2, 0.4], color: '#cbd5e1', type: 'box' },
      { id: 'mc4', name: 'Grille Front', initialPos: [0, 2, 2], targetPos: [0, 0.8, 0.21], dimensions: [0.5, 1.0, 0.05], color: '#1e293b', type: 'box' },
      { id: 'mc5', name: 'Grille Back', initialPos: [0, 2, -2], targetPos: [0, 0.8, -0.21], dimensions: [0.5, 1.0, 0.05], color: '#1e293b', type: 'box' },
      { id: 'mc6', name: 'Top Mesh', initialPos: [2, 4, 0], targetPos: [0, 1.45, 0], dimensions: [0.6, 0.1, 0.4], color: '#64748b', type: 'box' },
      { id: 'mc7', name: 'Side Yoke Left', initialPos: [-2, 0, 0], targetPos: [-0.4, 0.5, 0], dimensions: [0.1, 0.8, 0.1], color: '#475569', type: 'cylinder', rotation: [0, 0, 0.2] },
      { id: 'mc8', name: 'Side Yoke Right', initialPos: [2, 0, 0], targetPos: [0.4, 0.5, 0], dimensions: [0.1, 0.8, 0.1], color: '#475569', type: 'cylinder', rotation: [0, 0, -0.2] },
      { id: 'mc9', name: 'On/Off Switch', initialPos: [0, -1, 2], targetPos: [0, 0.4, 0.25], dimensions: [0.15, 0.3, 0.05], color: '#000000', type: 'box' },
    ]
  },
  {
    id: 37,
    title: "Red Lipstick",
    emoji: "💄",
    background: "#fff1f2",
    parts: [
      { id: 'ls1', name: 'Black Base', initialPos: [0, -4, 0], targetPos: [0, -1.2, 0], dimensions: [0.7, 0.8, 0.7], color: '#000000', type: 'box' },
      { id: 'ls2', name: 'Gold Collar', initialPos: [0, -2, 3], targetPos: [0, -0.7, 0], dimensions: [0.7, 0.2, 0.7], color: '#facc15', type: 'box' },
      { id: 'ls3', name: 'Inner Tube', initialPos: [0, 0, -3], targetPos: [0, 0.2, 0], dimensions: [0.55, 1.6, 0.55], color: '#fbbf24', type: 'cylinder' },
      { id: 'ls4', name: 'Lipstick Stick', initialPos: [2, 3, 0], targetPos: [0, 0.8, 0], dimensions: [0.45, 1.0, 0.45], color: '#dc2626', type: 'cylinder' },
      { id: 'ls5', name: 'Angled Tip', initialPos: [0, 5, 0], targetPos: [0, 1.45, 0], dimensions: [0.42, 0.4, 0.42], color: '#dc2626', type: 'cylinder', rotation: [0.6, 0, 0] },
      { id: 'ls6', name: 'Cap Top', initialPos: [-3, 2, 2], targetPos: [-1.2, -0.7, 0.8], dimensions: [0.75, 1.8, 0.75], color: '#000000', type: 'box', rotation: [0, 0, 0.4] },
    ]
  },
  {
    id: 38,
    title: "Game Controller",
    emoji: "🎮",
    background: "#f8fafc",
    parts: [
      { id: 'gc1', name: 'Center Body', initialPos: [0, -4, 0], targetPos: [0, -0.2, 0], dimensions: [1.6, 0.7, 0.25], color: '#0f172a', type: 'box' },
      { id: 'gc2', name: 'Left Grip', initialPos: [-4, -2, 0], targetPos: [-1.1, -0.8, 0.2], dimensions: [0.55, 1.6, 0.55], color: '#f8fafc', type: 'capsule', rotation: [0, 0, 0.6] },
      { id: 'gc3', name: 'Right Grip', initialPos: [4, -2, 0], targetPos: [1.1, -0.8, 0.2], dimensions: [0.55, 1.6, 0.55], color: '#f8fafc', type: 'capsule', rotation: [0, 0, -0.6] },
      { id: 'gc4', name: 'Touchpad', initialPos: [0, 4, 3], targetPos: [0, 0.5, 0.15], dimensions: [0.9, 0.6, 0.05], color: '#f1f5f9', type: 'box' },
      { id: 'gc5', name: 'D-Pad', initialPos: [-3, 2, -1], targetPos: [-1.0, 0.4, 0.25], dimensions: [0.35, 0.35, 0.1], color: '#334155', type: 'box' },
      { id: 'gc6', name: 'Face Buttons', initialPos: [3, 2, 1], targetPos: [1.0, 0.4, 0.25], dimensions: [0.4, 0.05, 0.4], color: '#e2e8f0', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'gc7', name: 'Left Stick', initialPos: [-2, -2, 2], targetPos: [-0.5, -0.5, 0.35], dimensions: [0.3, 0.1, 0.3], color: '#1e293b', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'gc8', name: 'Right Stick', initialPos: [2, -2, -2], targetPos: [0.5, -0.5, 0.35], dimensions: [0.3, 0.1, 0.3], color: '#1e293b', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'gc9', name: 'Left Stick Cap', initialPos: [-1, -3, 2], targetPos: [-0.5, -0.5, 0.45], dimensions: [0.32, 0, 0], color: '#334155', type: 'sphere' },
      { id: 'gc10', name: 'Right Stick Cap', initialPos: [1, -3, -2], targetPos: [0.5, -0.5, 0.45], dimensions: [0.32, 0, 0], color: '#334155', type: 'sphere' },
      { id: 'gc11', name: 'L1/R1 Bar', initialPos: [0, 5, -2], targetPos: [0, 0.8, -0.1], dimensions: [2.0, 0.2, 0.2], color: '#f8fafc', type: 'box' },
      { id: 'gc12', name: 'PS Button', initialPos: [0, 0, 0], targetPos: [0, -0.2, 0.25], dimensions: [0.12, 0, 0], color: '#0f172a', type: 'sphere' },
      { id: 'gc13', name: 'Mute Button', initialPos: [0, 1, 0], targetPos: [0, -0.05, 0.25], dimensions: [0.15, 0.05, 0.05], color: '#334155', type: 'box' },
    ]
  },
  {
    id: 39,
    title: "Royal Crown",
    emoji: "👑",
    background: "#fffbeb",
    parts: [
      { id: 'cr1', name: 'Golden Base', initialPos: [0, -4, 0], targetPos: [0, -0.8, 0], dimensions: [1.5, 1.5, 0.4], color: '#eab308', type: 'cylinder' },
      { id: 'cr2', name: 'Velvet Inlay', initialPos: [0, -2, 0], targetPos: [0, -0.7, 0], dimensions: [1.35, 1.35, 0.45], color: '#7f1d1d', type: 'cylinder' },
      { id: 'cr3', name: 'Center Spike', initialPos: [0, 4, 3], targetPos: [0, 0.4, 1.0], dimensions: [0, 0.3, 1.2], color: '#facc15', type: 'cylinder', rotation: [-0.2, 0, 0] },
      { id: 'cr4', name: 'Left Spike', initialPos: [-3, 2, 2], targetPos: [-0.95, 0.2, 0.35], dimensions: [0, 0.3, 1.0], color: '#facc15', type: 'cylinder', rotation: [-0.2, 0, 0.8] },
      { id: 'cr5', name: 'Right Spike', initialPos: [3, 2, 2], targetPos: [0.95, 0.2, 0.35], dimensions: [0, 0.3, 1.0], color: '#facc15', type: 'cylinder', rotation: [-0.2, 0, -0.8] },
      { id: 'cr6', name: 'Back Left Spike', initialPos: [-3, 2, -2], targetPos: [-0.6, 0.2, -0.85], dimensions: [0, 0.3, 1.0], color: '#facc15', type: 'cylinder', rotation: [0.2, 0, 2.5] },
      { id: 'cr7', name: 'Back Right Spike', initialPos: [3, 2, -2], targetPos: [0.6, 0.2, -0.85], dimensions: [0, 0.3, 1.0], color: '#facc15', type: 'cylinder', rotation: [0.2, 0, -2.5] },
      { id: 'cr8', name: 'Front Jewel', initialPos: [0, -2, 3], targetPos: [0, -0.8, 1.45], dimensions: [0.25, 0.4, 0.1], color: '#2563eb', type: 'box' },
      { id: 'cr9', name: 'Top Jewel', initialPos: [0, 5, -1], targetPos: [0, 1.0, 1.25], dimensions: [0.15, 0, 0], color: '#dc2626', type: 'sphere' },
      { id: 'cr10', name: 'Left Finial', initialPos: [-2, 5, 0], targetPos: [-1.25, 0.7, 0.45], dimensions: [0.1, 0, 0], color: '#ffffff', type: 'sphere' },
      { id: 'cr11', name: 'Right Finial', initialPos: [2, 5, 0], targetPos: [1.25, 0.7, 0.45], dimensions: [0.1, 0, 0], color: '#ffffff', type: 'sphere' },
    ]
  },
  {
    id: 40,
    title: "Gift Box",
    emoji: "🎁",
    background: "#fdf2f8",
    parts: [
      { id: 'gb1', name: 'Box', initialPos: [0, -3, 3], targetPos: [0, -0.5, 0], dimensions: [1.5, 1.2, 1.5], color: '#f472b6', type: 'box' },
      { id: 'gb2', name: 'Lid', initialPos: [0, 4, -2], targetPos: [0, 0.5, 0], dimensions: [1.6, 0.3, 1.6], color: '#db2777', type: 'box' },
      { id: 'gb3', name: 'Ribbon Vertical', initialPos: [3, 0, 0], targetPos: [0, -0.5, 0], dimensions: [0.3, 1.25, 1.55], color: '#facc15', type: 'box' },
      { id: 'gb4', name: 'Ribbon Horizontal', initialPos: [-3, 0, 0], targetPos: [0, -0.5, 0], dimensions: [1.55, 1.25, 0.3], color: '#facc15', type: 'box' },
      { id: 'gb5', name: 'Bow', initialPos: [0, 6, 0], targetPos: [0, 0.8, 0], dimensions: [0.8, 0.3, 0.3], color: '#facc15', type: 'box' },
    ]
  },
  {
    id: 41,
    title: "Sushi Roll",
    emoji: "🍣",
    background: "#f5f5f4",
    parts: [
      { id: 'su1', name: 'Wooden Board', initialPos: [0, -4, 0], targetPos: [0, -1.2, 0], dimensions: [3.0, 0.2, 2.0], color: '#d4a373', type: 'box' },
      { id: 'su2', name: 'Rice Ball', initialPos: [-3, -1, 3], targetPos: [0, -0.6, 0], dimensions: [1.2, 0.6, 0.7], color: '#f8fafc', type: 'capsule', rotation: [1.57, 0, 1.57] },
      { id: 'su3', name: 'Salmon Slice', initialPos: [0, 4, 0], targetPos: [0, -0.2, 0], dimensions: [1.4, 0.2, 0.8], color: '#fb7185', type: 'capsule', rotation: [1.57, 0, 1.57] },
      { id: 'su4', name: 'Nori Strip', initialPos: [-1, 2, -2], targetPos: [0, -0.4, 0], dimensions: [0.25, 0.85, 0.9], color: '#0f172a', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'su5', name: 'Chopstick 1', initialPos: [3, 2, 2], targetPos: [0.8, -1.1, 0.6], dimensions: [0.08, 0.08, 2.2], color: '#78350f', type: 'cylinder', rotation: [0, -0.2, 0] },
      { id: 'su6', name: 'Chopstick 2', initialPos: [3, 2, -2], targetPos: [0.8, -1.1, 0.8], dimensions: [0.08, 0.08, 2.2], color: '#78350f', type: 'cylinder', rotation: [0, -0.3, 0] },
      { id: 'su7', name: 'Soy Sauce Dish', initialPos: [-3, -3, -2], targetPos: [-1.0, -1.0, 0.5], dimensions: [0.6, 0.1, 0.6], color: '#1e293b', type: 'cylinder' },
      { id: 'su8', name: 'Soy Sauce', initialPos: [-3, -2, -2], targetPos: [-1.0, -0.9, 0.5], dimensions: [0.5, 0.05, 0.5], color: '#000000', type: 'cylinder' },
      { id: 'su9', name: 'Wasabi', initialPos: [-1, 3, 2], targetPos: [-1.2, -1.0, -0.6], dimensions: [0.2, 0.15, 0.2], color: '#84cc16', type: 'sphere' },
    ]
  },
  {
    id: 42,
    title: "Ping Pong Paddle",
    emoji: "🏓",
    background: "#fef2f2",
    parts: [
      { id: 'pp1', name: 'Paddle Wood', initialPos: [0, 0, -3], targetPos: [0, 0.5, 0], dimensions: [1.3, 1.5, 0.1], color: '#fcd34d', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'pp2', name: 'Red Rubber', initialPos: [-3, 3, 0], targetPos: [0, 0.5, 0.06], dimensions: [1.25, 1.45, 0.05], color: '#ef4444', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'pp3', name: 'Black Rubber', initialPos: [3, 3, 0], targetPos: [0, 0.5, -0.06], dimensions: [1.25, 1.45, 0.05], color: '#1e293b', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'pp4', name: 'Handle Grip', initialPos: [0, -4, 3], targetPos: [0, -0.9, 0], dimensions: [0.35, 0.9, 0.3], color: '#78350f', type: 'box' },
      { id: 'pp5', name: 'Handle Neck', initialPos: [0, -2, 3], targetPos: [0, -0.3, 0], dimensions: [0.3, 0.3, 0.15], color: '#fcd34d', type: 'box' },
      { id: 'pp6', name: 'Ball', initialPos: [2, 0, 2], targetPos: [0.8, 1.3, 0.4], dimensions: [0.15, 0, 0], color: '#ffffff', type: 'sphere' },
      { id: 'pp7', name: 'Net Post Left', initialPos: [-4, -4, 0], targetPos: [-1.2, -1.2, 0.5], dimensions: [0.1, 0.6, 0.1], color: '#334155', type: 'cylinder' },
      { id: 'pp8', name: 'Net Top', initialPos: [-2, -5, 0], targetPos: [-0.6, -1.0, 0.5], dimensions: [1.2, 0.05, 0.02], color: '#ffffff', type: 'box' },
    ]
  },
  {
    id: 43,
    title: "Palm Tree",
    emoji: "🌴",
    background: "#ecfeff",
    parts: [
      { id: 'pt1', name: 'Island Base', initialPos: [0, -4, 3], targetPos: [0, -1.8, 0], dimensions: [1.8, 0.4, 1.8], color: '#fcd34d', type: 'cylinder' },
      { id: 'pt2', name: 'Trunk Bottom', initialPos: [-3, -4, -2], targetPos: [0, -1.0, 0], dimensions: [0.35, 1.2, 0.35], color: '#78350f', type: 'cylinder' },
      { id: 'pt3', name: 'Trunk Mid', initialPos: [3, -2, 2], targetPos: [0.1, 0.1, 0], dimensions: [0.3, 1.2, 0.3], color: '#78350f', type: 'cylinder', rotation: [0, 0, -0.15] },
      { id: 'pt4', name: 'Trunk Top', initialPos: [-2, 0, 0], targetPos: [0.3, 1.1, 0], dimensions: [0.25, 1.2, 0.25], color: '#78350f', type: 'cylinder', rotation: [0, 0, -0.3] },
      { id: 'pt5', name: 'Leaf North', initialPos: [0, 4, 3], targetPos: [0.4, 1.6, -0.6], dimensions: [0.4, 0.05, 1.6], color: '#16a34a', type: 'box', rotation: [0.4, 0, 0] },
      { id: 'pt6', name: 'Leaf South', initialPos: [0, 4, -3], targetPos: [0.4, 1.6, 0.6], dimensions: [0.4, 0.05, 1.6], color: '#16a34a', type: 'box', rotation: [-0.4, 0, 0] },
      { id: 'pt7', name: 'Leaf East', initialPos: [4, 4, 0], targetPos: [1.0, 1.6, 0], dimensions: [1.6, 0.05, 0.4], color: '#16a34a', type: 'box', rotation: [0, 0, 0.4] },
      { id: 'pt8', name: 'Leaf West', initialPos: [-4, 4, 0], targetPos: [-0.2, 1.6, 0], dimensions: [1.6, 0.05, 0.4], color: '#16a34a', type: 'box', rotation: [0, 0, -0.4] },
      { id: 'pt9', name: 'Coconut Left', initialPos: [-1, 2, 2], targetPos: [0.2, 1.3, 0.25], dimensions: [0.15, 0, 0], color: '#3f2c22', type: 'sphere' },
      { id: 'pt10', name: 'Coconut Right', initialPos: [1, 2, -2], targetPos: [0.2, 1.3, -0.25], dimensions: [0.15, 0, 0], color: '#3f2c22', type: 'sphere' },
    ]
  },
  {
    id: 44,
    title: "Snowman",
    emoji: "☃️",
    background: "#f1f5f9",
    parts: [
      { id: 'sm1', name: 'Bottom Sphere', initialPos: [-3, -4, 2], targetPos: [0, -1.3, 0], dimensions: [1.5, 0, 0], color: '#f8fafc', type: 'sphere' },
      { id: 'sm2', name: 'Middle Sphere', initialPos: [3, -1, -2], targetPos: [0, 0, 0], dimensions: [1.1, 0, 0], color: '#f8fafc', type: 'sphere' },
      { id: 'sm3', name: 'Head Sphere', initialPos: [0, 4, 3], targetPos: [0, 1.0, 0], dimensions: [0.85, 0, 0], color: '#f8fafc', type: 'sphere' },
      { id: 'sm4', name: 'Hat Brim', initialPos: [-2, 5, -2], targetPos: [0, 1.5, 0], dimensions: [0.9, 0.9, 0.05], color: '#1e293b', type: 'cylinder' },
      { id: 'sm5', name: 'Hat Body', initialPos: [-2, 6, -2], targetPos: [0, 1.8, 0], dimensions: [0.55, 0.55, 0.6], color: '#1e293b', type: 'cylinder' },
      { id: 'sm6', name: 'Hat Band', initialPos: [2, 5, -1], targetPos: [0, 1.6, 0], dimensions: [0.56, 0.56, 0.15], color: '#dc2626', type: 'cylinder' },
      { id: 'sm7', name: 'Carrot Nose', initialPos: [2, 2, 2], targetPos: [0, 1.0, 1.05], dimensions: [0.01, 0.08, 0.4], color: '#f97316', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'sm8', name: 'Scarf Neck', initialPos: [-1, 1, 3], targetPos: [0, 0.65, 0], dimensions: [0.65, 0.75, 0.15], color: '#ef4444', type: 'cylinder' },
      { id: 'sm9', name: 'Scarf Tail', initialPos: [1, 0, 3], targetPos: [0.4, 0.3, 0.4], dimensions: [0.2, 0.5, 0.1], color: '#ef4444', type: 'box', rotation: [0.3, 0, -0.4] },
      { id: 'sm10', name: 'Left Arm', initialPos: [-4, 0, 0], targetPos: [-0.9, 0.2, 0], dimensions: [0.9, 0.08, 0.08], color: '#451a03', type: 'box', rotation: [0, 0, 0.4] },
      { id: 'sm11', name: 'Right Arm', initialPos: [4, 0, 0], targetPos: [0.9, 0.2, 0], dimensions: [0.9, 0.08, 0.08], color: '#451a03', type: 'box', rotation: [0, 0, -0.4] },
      { id: 'sm12', name: 'Left Eye', initialPos: [-1, 3, 2], targetPos: [-0.25, 1.25, 0.80], dimensions: [0.07, 0, 0], color: '#000000', type: 'sphere' },
      { id: 'sm13', name: 'Right Eye', initialPos: [1, 3, 2], targetPos: [0.25, 1.25, 0.80], dimensions: [0.07, 0, 0], color: '#000000', type: 'sphere' },
      { id: 'sm14', name: 'Button Top', initialPos: [0, -1, 3], targetPos: [0, 0.3, 1.08], dimensions: [0.09, 0, 0], color: '#1e293b', type: 'sphere' },
      { id: 'sm15', name: 'Button Bottom', initialPos: [0, -1, 3], targetPos: [0, -0.3, 1.08], dimensions: [0.09, 0, 0], color: '#1e293b', type: 'sphere' },
    ]
  },
  {
    id: 45,
    title: "Alarm Clock",
    emoji: "⏰",
    background: "#fefce8",
    parts: [
      { id: 'ac1', name: 'Clock Body', initialPos: [0, -3, 3], targetPos: [0, 0, 0], dimensions: [1.6, 1.6, 0.6], color: '#ef4444', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'ac2', name: 'Clock Face', initialPos: [0, 2, 4], targetPos: [0, 0, 0.31], dimensions: [1.4, 1.4, 0.1], color: '#ffffff', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'ac3', name: 'Left Bell', initialPos: [-3, 3, 0], targetPos: [-0.6, 0.9, 0], dimensions: [0.55, 0, 0], color: '#b91c1c', type: 'sphere' },
      { id: 'ac4', name: 'Right Bell', initialPos: [3, 3, 0], targetPos: [0.6, 0.9, 0], dimensions: [0.55, 0, 0], color: '#b91c1c', type: 'sphere' },
      { id: 'ac5', name: 'Hammer', initialPos: [0, 4, -1], targetPos: [0, 1.1, 0], dimensions: [0.1, 0.4, 0.1], color: '#7f1d1d', type: 'box' },
      { id: 'ac6', name: 'Left Leg', initialPos: [-2, -4, 0], targetPos: [-0.6, -0.9, 0], dimensions: [0.15, 0.5, 0.15], color: '#7f1d1d', type: 'cylinder', rotation: [0, 0, -0.4] },
      { id: 'ac7', name: 'Right Leg', initialPos: [2, -4, 0], targetPos: [0.6, -0.9, 0], dimensions: [0.15, 0.5, 0.15], color: '#7f1d1d', type: 'cylinder', rotation: [0, 0, 0.4] },
      { id: 'ac8', name: 'Hour Hand', initialPos: [-1, 0, 2], targetPos: [0.1, 0.1, 0.37], dimensions: [0.1, 0.4, 0.05], color: '#000000', type: 'box', rotation: [0, 0, -0.5] },
      { id: 'ac9', name: 'Minute Hand', initialPos: [1, 0, 2], targetPos: [0, 0.2, 0.38], dimensions: [0.08, 0.6, 0.05], color: '#000000', type: 'box', rotation: [0, 0, 0] },
    ]
  },
  {
    id: 46,
    title: "Swirly Lollipop",
    emoji: "🍭",
    background: "#fdf4ff",
    parts: [
      { id: 'lp1', name: 'Stick', initialPos: [0, -4, 2], targetPos: [0, -0.6, 0], dimensions: [0.12, 0.12, 2.6], color: '#f8fafc', type: 'cylinder' },
      { id: 'lp2', name: 'Candy Body', initialPos: [-3, 3, -1], targetPos: [0, 1.3, 0], dimensions: [1.1, 1.1, 0.25], color: '#db2777', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'lp3', name: 'Swirl Outer', initialPos: [3, 3, 1], targetPos: [0, 1.3, 0.04], dimensions: [0.85, 0.85, 0.25], color: '#fbcfe8', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'lp4', name: 'Swirl Mid', initialPos: [-2, 4, 1], targetPos: [0, 1.3, 0.08], dimensions: [0.6, 0.6, 0.25], color: '#db2777', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'lp5', name: 'Swirl Center', initialPos: [2, 4, -1], targetPos: [0, 1.3, 0.12], dimensions: [0.35, 0.35, 0.25], color: '#fbcfe8', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'lp6', name: 'Bow Center', initialPos: [0, -1, 3], targetPos: [0, 0.1, 0.15], dimensions: [0.25, 0, 0], color: '#a855f7', type: 'sphere' },
      { id: 'lp7', name: 'Bow Left', initialPos: [-3, -2, 0], targetPos: [-0.4, 0.1, 0.15], dimensions: [0.3, 0.3, 0.2], color: '#a855f7', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'lp8', name: 'Bow Right', initialPos: [3, -2, 0], targetPos: [0.4, 0.1, 0.15], dimensions: [0.3, 0.3, 0.2], color: '#a855f7', type: 'cylinder', rotation: [0, 0, 1.57] },
    ]
  },
  {
    id: 47,
    title: "The Bicycle",
    emoji: "🚲",
    background: "#f0fdf4",
    parts: [
      { id: 'bc1', name: 'Frame Main', initialPos: [0, 0, 3], targetPos: [0, 0, 0], dimensions: [1.8, 0.1, 0.1], color: '#ef4444', type: 'box' },
      { id: 'bc2', name: 'Frame Seat Post', initialPos: [-1, 2, 0], targetPos: [-0.6, 0.45, 0], dimensions: [0.1, 0.9, 0.1], color: '#ef4444', type: 'box', rotation: [0, 0, -0.3] },
      { id: 'bc3', name: 'Frame Handle Post', initialPos: [1, 2, 0], targetPos: [0.6, 0.45, 0], dimensions: [0.1, 0.9, 0.1], color: '#ef4444', type: 'box', rotation: [0, 0, 0.3] },
      { id: 'bc4', name: 'Wheel Front', initialPos: [3, -3, -2], targetPos: [1.2, -0.5, 0], dimensions: [1.0, 1.0, 0.1], color: '#1e293b', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'bc5', name: 'Wheel Back', initialPos: [-3, -3, 2], targetPos: [-1.2, -0.5, 0], dimensions: [1.0, 1.0, 0.1], color: '#1e293b', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'bc6', name: 'Seat', initialPos: [-2, 3, 2], targetPos: [-0.7, 0.9, 0], dimensions: [0.5, 0.1, 0.4], color: '#000000', type: 'box' },
      { id: 'bc7', name: 'Handlebar', initialPos: [2, 3, -1], targetPos: [0.7, 0.9, 0], dimensions: [0.05, 0.05, 1.2], color: '#94a3b8', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'bc8', name: 'Left Grip', initialPos: [2, 4, 1], targetPos: [0.7, 0.9, 0.5], dimensions: [0.07, 0.07, 0.25], color: '#000000', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'bc9', name: 'Right Grip', initialPos: [2, 4, -1], targetPos: [0.7, 0.9, -0.5], dimensions: [0.07, 0.07, 0.25], color: '#000000', type: 'cylinder', rotation: [1.57, 0, 0] },
    ]
  },
  {
    id: 48,
    title: "Yellow Pencil",
    emoji: "✏️",
    background: "#fffbeb",
    parts: [
      { id: 'pc1', name: 'Body', initialPos: [0, 0, 3], targetPos: [0, 0, 0], dimensions: [0.4, 2.0, 0.4], color: '#facc15', type: 'cylinder' },
      { id: 'pc2', name: 'Metal Band', initialPos: [0, 3, -2], targetPos: [0, 1.1, 0], dimensions: [0.42, 0.2, 0.42], color: '#9ca3af', type: 'cylinder' },
      { id: 'pc3', name: 'Eraser', initialPos: [0, 4, 1], targetPos: [0, 1.3, 0], dimensions: [0.4, 0.3, 0.4], color: '#f472b6', type: 'cylinder' },
      { id: 'pc4', name: 'Tip Wood', initialPos: [0, -4, -1], targetPos: [0, -1.2, 0], dimensions: [0.35, 0.4, 0.35], color: '#fde68a', type: 'cylinder' }, // Approximate cone
      { id: 'pc5', name: 'Graphite', initialPos: [0, -5, 1], targetPos: [0, -1.45, 0], dimensions: [0.1, 0.1, 0.1], color: '#000000', type: 'sphere' },
    ]
  },
  {
    id: 49,
    title: "Coffee Cup",
    emoji: "☕",
    background: "#fff7ed",
    parts: [
      { id: 'ccp1', name: 'Saucer', initialPos: [0, -4, 0], targetPos: [0, -1.0, 0], dimensions: [1.3, 1.2, 0.15], color: '#f8fafc', type: 'cylinder' },
      { id: 'ccp2', name: 'Cup Body', initialPos: [0, -2, 3], targetPos: [0, -0.2, 0], dimensions: [0.85, 0.65, 1.4], color: '#ffffff', type: 'cylinder' },
      { id: 'ccp3', name: 'Coffee Surface', initialPos: [0, 4, 0], targetPos: [0, 0.4, 0], dimensions: [0.75, 0.75, 0.05], color: '#3f1d0b', type: 'cylinder' },
      { id: 'ccp4', name: 'Handle Top', initialPos: [2, 2, 2], targetPos: [0.6, 0.2, 0], dimensions: [0.1, 0.1, 0.6], color: '#ffffff', type: 'cylinder', rotation: [0, 0, 1.2] },
      { id: 'ccp5', name: 'Handle Bottom', initialPos: [2, -2, -2], targetPos: [0.55, -0.6, 0], dimensions: [0.1, 0.1, 0.5], color: '#ffffff', type: 'cylinder', rotation: [0, 0, 1.9] },
      { id: 'ccp6', name: 'Handle Grip', initialPos: [3, 0, 0], targetPos: [1.0, -0.2, 0], dimensions: [0.12, 0.8, 0], color: '#ffffff', type: 'capsule' },
      { id: 'ccp7', name: 'Marshmallow 1', initialPos: [-1, 5, 1], targetPos: [-0.3, 0.45, 0.2], dimensions: [0.2, 0.15, 0.2], color: '#ffe4e6', type: 'cylinder' },
      { id: 'ccp8', name: 'Marshmallow 2', initialPos: [1, 5, -1], targetPos: [0.2, 0.45, -0.1], dimensions: [0.2, 0.15, 0.2], color: '#ffffff', type: 'cylinder' },
      { id: 'ccp9', name: 'Spoon Handle', initialPos: [-2, 3, -2], targetPos: [-0.5, 0.9, -0.4], dimensions: [0.05, 0.05, 1.0], color: '#94a3b8', type: 'cylinder', rotation: [0.5, 0, -0.3] },
    ]
  },
  {
    id: 50,
    title: "DJ Headphones",
    emoji: "🎧",
    background: "#f1f5f9",
    parts: [
      { id: 'hp1', name: 'Headband Top', initialPos: [0, 4, -3], targetPos: [0, 1.8, 0], dimensions: [1.8, 0.2, 0.5], color: '#1e293b', type: 'box' },
      { id: 'hp2', name: 'Left Arm', initialPos: [-3, 3, 0], targetPos: [-0.9, 1.2, 0], dimensions: [0.2, 1.2, 0.4], color: '#1e293b', type: 'box', rotation: [0, 0, 0.2] },
      { id: 'hp3', name: 'Right Arm', initialPos: [3, 3, 0], targetPos: [0.9, 1.2, 0], dimensions: [0.2, 1.2, 0.4], color: '#1e293b', type: 'box', rotation: [0, 0, -0.2] },
      { id: 'hp4', name: 'Left Ear Cup', initialPos: [-3, -2, 2], targetPos: [-1.1, 0.4, 0], dimensions: [0.6, 0.6, 0.4], color: '#0f172a', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'hp5', name: 'Right Ear Cup', initialPos: [3, -2, 2], targetPos: [1.1, 0.4, 0], dimensions: [0.6, 0.6, 0.4], color: '#0f172a', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'hp6', name: 'Left Cushion', initialPos: [-2, 0, -2], targetPos: [-0.85, 0.4, 0], dimensions: [0.6, 0.6, 0.15], color: '#334155', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'hp7', name: 'Right Cushion', initialPos: [2, 0, -2], targetPos: [0.85, 0.4, 0], dimensions: [0.6, 0.6, 0.15], color: '#334155', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'hp8', name: 'Left Detail', initialPos: [-4, 2, -1], targetPos: [-1.31, 0.4, 0], dimensions: [0.3, 0.3, 0.05], color: '#94a3b8', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'hp9', name: 'Right Detail', initialPos: [4, 2, 1], targetPos: [1.31, 0.4, 0], dimensions: [0.3, 0.3, 0.05], color: '#94a3b8', type: 'cylinder', rotation: [0, 0, 1.57] },
    ]
  },
  {
    id: 51,
    title: "School Bus",
    emoji: "🚌",
    background: "#fffbeb",
    parts: [
      { id: 'sb1', name: 'Chassis Main', initialPos: [0, -4, 3], targetPos: [0, -0.6, -0.2], dimensions: [3.2, 0.8, 1.0], color: '#facc15', type: 'box' },
      { id: 'sb2', name: 'Cabin Roof', initialPos: [0, 4, -2], targetPos: [-0.2, 0.2, -0.2], dimensions: [2.8, 0.8, 0.95], color: '#facc15', type: 'box' },
      { id: 'sb3', name: 'Front Hood', initialPos: [4, -1, 0], targetPos: [1.8, -0.7, -0.2], dimensions: [0.8, 0.6, 0.9], color: '#facc15', type: 'box' },
      { id: 'sb4', name: 'Front Grille', initialPos: [4, 0, 2], targetPos: [2.21, -0.7, -0.2], dimensions: [0.05, 0.4, 0.6], color: '#1f2937', type: 'box' },
      { id: 'sb5', name: 'Window Strip Left', initialPos: [-2, 3, 2], targetPos: [-0.2, 0.3, 0.28], dimensions: [2.7, 0.5, 0.05], color: '#334155', type: 'box' },
      { id: 'sb6', name: 'Window Strip Right', initialPos: [-2, 3, -2], targetPos: [-0.2, 0.3, -0.68], dimensions: [2.7, 0.5, 0.05], color: '#334155', type: 'box' },
      { id: 'sb7', name: 'Rub Rail Top', initialPos: [0, 1, 3], targetPos: [-0.2, -0.3, -0.2], dimensions: [2.8, 0.05, 1.02], color: '#000000', type: 'box' },
      { id: 'sb8', name: 'Rub Rail Bottom', initialPos: [0, -1, 3], targetPos: [-0.2, -0.7, -0.2], dimensions: [2.8, 0.05, 1.02], color: '#000000', type: 'box' },
      { id: 'sb9', name: 'Front Bumper', initialPos: [4, -3, 0], targetPos: [2.3, -1.1, -0.2], dimensions: [0.2, 0.2, 1.1], color: '#000000', type: 'box' },
      { id: 'sb10', name: 'Rear Bumper', initialPos: [-4, -3, 0], targetPos: [-1.7, -1.1, -0.2], dimensions: [0.2, 0.2, 1.1], color: '#000000', type: 'box' },
      { id: 'sb11', name: 'Wheel Front Left', initialPos: [3, -4, 2], targetPos: [1.6, -1.1, 0.35], dimensions: [0.5, 0.5, 0.2], color: '#1f2937', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'sb12', name: 'Wheel Front Right', initialPos: [3, -4, -2], targetPos: [1.6, -1.1, -0.75], dimensions: [0.5, 0.5, 0.2], color: '#1f2937', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'sb13', name: 'Wheel Back Left', initialPos: [-3, -4, 2], targetPos: [-1.0, -1.1, 0.35], dimensions: [0.55, 0.55, 0.2], color: '#1f2937', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'sb14', name: 'Wheel Back Right', initialPos: [-3, -4, -2], targetPos: [-1.0, -1.1, -0.75], dimensions: [0.55, 0.55, 0.2], color: '#1f2937', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'sb15', name: 'Stop Sign', initialPos: [-1, 2, 3], targetPos: [0.5, 0.1, 0.32], dimensions: [0.25, 0.25, 0.05], color: '#dc2626', type: 'box', rotation: [0, 0, 0.785] },
      { id: 'sb16', name: 'Headlight Left', initialPos: [4, 1, 1], targetPos: [1.81, -0.5, 0.3], dimensions: [0.15, 0, 0], color: '#fbbf24', type: 'sphere' },
      { id: 'sb17', name: 'Headlight Right', initialPos: [4, 1, -1], targetPos: [1.81, -0.5, -0.7], dimensions: [0.15, 0, 0], color: '#fbbf24', type: 'sphere' },
    ]
  },
  {
    id: 52,
    title: "Fire Truck",
    emoji: "🚒",
    background: "#fff1f2",
    parts: [
      { id: 'ft1', name: 'Main Chassis', initialPos: [0, -5, 0], targetPos: [0, -0.95, 0], dimensions: [3.3, 0.6, 1.25], color: '#dc2626', type: 'box' },
      { id: 'ft2', name: 'Rear Body', initialPos: [-4, 1, -2], targetPos: [-0.95, -0.2, 0], dimensions: [1.9, 1.0, 1.2], color: '#ef4444', type: 'box' },
      { id: 'ft3', name: 'Cabin', initialPos: [4, 3, 2], targetPos: [1.35, -0.1, 0], dimensions: [1.25, 1.05, 1.2], color: '#ef4444', type: 'box' },
      { id: 'ft4', name: 'Cabin Roof', initialPos: [2, 5, -3], targetPos: [1.35, 0.55, 0], dimensions: [1.25, 0.35, 1.2], color: '#b91c1c', type: 'box' },
      { id: 'ft5', name: 'Windshield', initialPos: [5, 0, 0], targetPos: [2.02, 0.1, 0], dimensions: [0.05, 0.65, 0.95], color: '#38bdf8', type: 'box' },
      { id: 'ft6', name: 'Front Bumper', initialPos: [5, -3, 1], targetPos: [2.15, -0.85, 0], dimensions: [0.2, 0.2, 1.28], color: '#0f172a', type: 'box' },

      { id: 'ft7', name: 'Ladder Base', initialPos: [-5, 2, 0], targetPos: [-0.35, 0.75, 0], dimensions: [1.2, 0.15, 0.7], color: '#94a3b8', type: 'box' },
      { id: 'ft8', name: 'Ladder Segment A', initialPos: [-5, 5, 2], targetPos: [-1.2, 1.05, 0], dimensions: [1.9, 0.12, 0.5], color: '#cbd5e1', type: 'box', rotation: [0, 0, 0.25] },
      { id: 'ft9', name: 'Ladder Segment B', initialPos: [-2, 6, -3], targetPos: [-2.05, 1.45, 0], dimensions: [1.6, 0.1, 0.42], color: '#e2e8f0', type: 'box', rotation: [0, 0, 0.35] },

      { id: 'ft10', name: 'Hose Reel', initialPos: [-1, 4, 4], targetPos: [-1.55, 0.1, 0.72], dimensions: [0.28, 0.28, 0.55], color: '#334155', type: 'cylinder', rotation: [0, 0, 1.57] },

      { id: 'ft11', name: 'Wheel Front Left', initialPos: [3, -4, 3], targetPos: [1.35, -1.25, 0.62], dimensions: [0.5, 0.5, 0.22], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'ft12', name: 'Wheel Front Right', initialPos: [3, -4, -3], targetPos: [1.35, -1.25, -0.62], dimensions: [0.5, 0.5, 0.22], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'ft13', name: 'Wheel Rear Left', initialPos: [-3, -4, 3], targetPos: [-1.15, -1.25, 0.62], dimensions: [0.55, 0.55, 0.22], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'ft14', name: 'Wheel Rear Right', initialPos: [-3, -4, -3], targetPos: [-1.15, -1.25, -0.62], dimensions: [0.55, 0.55, 0.22], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },

      { id: 'ft15', name: 'Siren Blue', initialPos: [0, 6, -1], targetPos: [1.55, 0.95, -0.35], dimensions: [0.16, 0, 0], color: '#60a5fa', type: 'sphere' },
      { id: 'ft16', name: 'Siren Red', initialPos: [0, 6, 1], targetPos: [1.55, 0.95, 0.35], dimensions: [0.16, 0, 0], color: '#fb7185', type: 'sphere' },
    ]
  },
  {
    id: 53,
    title: "Pirate Ship",
    emoji: "🏴‍☠️",
    background: "#0b1324",
    parts: [
      { id: 'ps1', name: 'Hull Base', initialPos: [0, -5, 0], targetPos: [0, -1.0, 0], dimensions: [2.6, 0.6, 1.2], color: '#78350f', type: 'box' },
      { id: 'ps2', name: 'Hull Deck', initialPos: [-4, -1, 3], targetPos: [0, -0.55, 0], dimensions: [2.5, 0.2, 1.1], color: '#92400e', type: 'box' },
      { id: 'ps3', name: 'Bow', initialPos: [5, -2, 0], targetPos: [1.55, -0.8, 0], dimensions: [0.8, 0.5, 1.0], color: '#7c2d12', type: 'box', rotation: [0, 0, 0.1] },
      { id: 'ps4', name: 'Stern', initialPos: [-5, -2, 0], targetPos: [-1.55, -0.8, 0], dimensions: [0.75, 0.6, 1.0], color: '#7c2d12', type: 'box' },

      { id: 'ps5', name: 'Mast', initialPos: [0, 6, 2], targetPos: [0.0, 0.55, 0], dimensions: [0.12, 1.9, 0.12], color: '#0f172a', type: 'cylinder' },
      { id: 'ps6', name: 'Main Sail', initialPos: [4, 3, -3], targetPos: [0.35, 0.9, 0], dimensions: [1.0, 1.2, 0.06], color: '#e2e8f0', type: 'box' },
      { id: 'ps7', name: 'Crossbeam', initialPos: [-4, 4, 0], targetPos: [0.15, 1.35, 0], dimensions: [1.7, 0.08, 0.08], color: '#0f172a', type: 'box', rotation: [0, 0, 0.05] },

      { id: 'ps8', name: 'Flag Pole', initialPos: [2, 7, -2], targetPos: [0.15, 1.85, 0], dimensions: [0.06, 0.5, 0.06], color: '#0f172a', type: 'cylinder' },
      { id: 'ps9', name: 'Pirate Flag', initialPos: [-2, 7, 2], targetPos: [0.55, 1.75, 0], dimensions: [0.7, 0.45, 0.05], color: '#111827', type: 'box' },
      { id: 'ps10', name: 'Skull Emblem', initialPos: [0, 8, 0], targetPos: [0.55, 1.75, 0.03], dimensions: [0.12, 0, 0], color: '#ffffff', type: 'sphere' },

      { id: 'ps11', name: 'Window Port A', initialPos: [3, 1, 4], targetPos: [-0.5, -0.75, 0.55], dimensions: [0.12, 0, 0], color: '#fbbf24', type: 'sphere' },
      { id: 'ps12', name: 'Window Port B', initialPos: [-3, 1, -4], targetPos: [0.3, -0.75, 0.55], dimensions: [0.12, 0, 0], color: '#fbbf24', type: 'sphere' },
      { id: 'ps13', name: 'Anchor', initialPos: [-4, 3, 3], targetPos: [-1.15, -0.85, 0.62], dimensions: [0.16, 0.7, 0.16], color: '#64748b', type: 'cylinder', rotation: [0, 0, 1.57] },
    ]
  },
  {
    id: 54,
    title: "Rainbow Unicorn",
    emoji: "🦄",
    background: "#faf5ff",
    parts: [
      { id: 'ru1', name: 'Body', initialPos: [-4, 0, 3], targetPos: [0.0, -0.1, 0], dimensions: [1.9, 0.9, 0.8], color: '#f472b6', type: 'box' },
      { id: 'ru2', name: 'Chest', initialPos: [4, 0, -3], targetPos: [0.6, 0.05, 0], dimensions: [1.1, 0.8, 0.7], color: '#fb7185', type: 'box' },
      { id: 'ru3', name: 'Neck', initialPos: [-3, 4, -2], targetPos: [1.15, 0.45, 0], dimensions: [0.35, 0.85, 0.35], color: '#f9a8d4', type: 'box', rotation: [0, 0, -0.25] },
      { id: 'ru4', name: 'Head', initialPos: [3, 4, 2], targetPos: [1.65, 0.85, 0], dimensions: [0.55, 0.5, 0.5], color: '#fce7f3', type: 'sphere' },
      { id: 'ru5', name: 'Horn', initialPos: [0, 7, 0], targetPos: [1.85, 1.25, 0], dimensions: [0.07, 0.35, 0.07], color: '#fbbf24', type: 'cylinder' },

      { id: 'ru6', name: 'Leg Front Left', initialPos: [4, -4, 2], targetPos: [0.8, -0.95, 0.35], dimensions: [0.22, 0.8, 0.22], color: '#f472b6', type: 'box' },
      { id: 'ru7', name: 'Leg Front Right', initialPos: [-4, -4, -2], targetPos: [0.8, -0.95, -0.35], dimensions: [0.22, 0.8, 0.22], color: '#f472b6', type: 'box' },
      { id: 'ru8', name: 'Leg Back Left', initialPos: [2, -4, 4], targetPos: [-0.6, -0.95, 0.35], dimensions: [0.22, 0.8, 0.22], color: '#fb7185', type: 'box' },
      { id: 'ru9', name: 'Leg Back Right', initialPos: [-2, -4, -4], targetPos: [-0.6, -0.95, -0.35], dimensions: [0.22, 0.8, 0.22], color: '#fb7185', type: 'box' },

      { id: 'ru10', name: 'Mane Front', initialPos: [0, 6, -3], targetPos: [1.35, 0.95, 0.25], dimensions: [0.25, 0.7, 0.12], color: '#60a5fa', type: 'box', rotation: [0, 0.2, 0.2] },
      { id: 'ru11', name: 'Mane Mid', initialPos: [-2, 6, 3], targetPos: [1.05, 0.75, 0], dimensions: [0.25, 0.8, 0.12], color: '#34d399', type: 'box', rotation: [0, 0, 0.1] },
      { id: 'ru12', name: 'Mane Back', initialPos: [2, 6, 1], targetPos: [0.75, 0.55, -0.25], dimensions: [0.25, 0.7, 0.12], color: '#a78bfa', type: 'box', rotation: [0, -0.2, -0.15] },
      { id: 'ru13', name: 'Tail', initialPos: [-5, 4, 0], targetPos: [-1.35, 0.35, 0], dimensions: [0.9, 0.18, 0.18], color: '#f59e0b', type: 'box', rotation: [0, 0, -0.35] },
    ]
  },
  {
    id: 55,
    title: "Space Satellite",
    emoji: "🛰️",
    background: "#020617",
    parts: [
      { id: 'ss1', name: 'Main Core', initialPos: [0, 0, 5], targetPos: [0, 0.15, 0], dimensions: [0.95, 0.95, 0.95], color: '#94a3b8', type: 'box' },
      { id: 'ss2', name: 'Top Antenna', initialPos: [0, 6, 0], targetPos: [0, 1.15, 0], dimensions: [0.06, 0.9, 0.06], color: '#cbd5e1', type: 'cylinder' },
      { id: 'ss3', name: 'Dish', initialPos: [4, 3, 0], targetPos: [0.55, 0.55, 0.85], dimensions: [0.55, 0, 0], color: '#e2e8f0', type: 'sphere' },
      { id: 'ss4', name: 'Dish Arm', initialPos: [-4, 2, 0], targetPos: [0.35, 0.45, 0.55], dimensions: [0.08, 0.08, 0.7], color: '#cbd5e1', type: 'cylinder', rotation: [1.57, 0, 0] },

      { id: 'ss5', name: 'Solar Panel Left', initialPos: [-6, 1, 2], targetPos: [-1.9, 0.2, 0], dimensions: [2.0, 0.12, 0.9], color: '#2563eb', type: 'box', rotation: [0, 0, 0.08] },
      { id: 'ss6', name: 'Solar Panel Right', initialPos: [6, 1, -2], targetPos: [1.9, 0.2, 0], dimensions: [2.0, 0.12, 0.9], color: '#2563eb', type: 'box', rotation: [0, 0, -0.08] },
      { id: 'ss7', name: 'Panel Hinge Left', initialPos: [-3, -1, -4], targetPos: [-0.95, 0.2, 0], dimensions: [0.18, 0.18, 0.18], color: '#94a3b8', type: 'box' },
      { id: 'ss8', name: 'Panel Hinge Right', initialPos: [3, -1, 4], targetPos: [0.95, 0.2, 0], dimensions: [0.18, 0.18, 0.18], color: '#94a3b8', type: 'box' },

      { id: 'ss9', name: 'Thruster Left', initialPos: [-2, -5, 2], targetPos: [-0.35, -0.75, -0.55], dimensions: [0.2, 0.22, 0.2], color: '#334155', type: 'cylinder' },
      { id: 'ss10', name: 'Thruster Right', initialPos: [2, -5, -2], targetPos: [0.35, -0.75, -0.55], dimensions: [0.2, 0.22, 0.2], color: '#334155', type: 'cylinder' },
      { id: 'ss11', name: 'Gold Band', initialPos: [0, -2, -5], targetPos: [0, -0.15, 0], dimensions: [0.98, 0.1, 0.98], color: '#facc15', type: 'box' },
    ]
  },
  {
    id: 56,
    title: "Kawaii Cat",
    emoji: "🐱",
    background: "#fff7ed",
    parts: [
      { id: 'kc1', name: 'Head', initialPos: [0, 5, 0], targetPos: [0, 0.9, 0], dimensions: [0.95, 0.85, 0.75], color: '#fed7aa', type: 'box' },
      { id: 'kc2', name: 'Body', initialPos: [0, -5, 0], targetPos: [0, -0.35, 0], dimensions: [1.1, 1.1, 0.8], color: '#fdba74', type: 'box' },
      { id: 'kc3', name: 'Left Ear', initialPos: [-4, 6, 2], targetPos: [-0.45, 1.45, 0.1], dimensions: [0.3, 0.3, 0.25], color: '#fdba74', type: 'box', rotation: [0, 0, 0.2] },
      { id: 'kc4', name: 'Right Ear', initialPos: [4, 6, -2], targetPos: [0.45, 1.45, 0.1], dimensions: [0.3, 0.3, 0.25], color: '#fdba74', type: 'box', rotation: [0, 0, -0.2] },

      { id: 'kc5', name: 'Left Eye', initialPos: [-2, 3, 3], targetPos: [-0.25, 1.0, 0.42], dimensions: [0.09, 0, 0], color: '#111827', type: 'sphere' },
      { id: 'kc6', name: 'Right Eye', initialPos: [2, 3, -3], targetPos: [0.25, 1.0, 0.42], dimensions: [0.09, 0, 0], color: '#111827', type: 'sphere' },
      { id: 'kc7', name: 'Nose', initialPos: [0, 2, 4], targetPos: [0, 0.82, 0.5], dimensions: [0.08, 0, 0], color: '#fb7185', type: 'sphere' },
      { id: 'kc8', name: 'Mouth', initialPos: [0, 1, 4], targetPos: [0, 0.7, 0.5], dimensions: [0.12, 0.08, 0.08], color: '#9a3412', type: 'box' },

      { id: 'kc9', name: 'Paw Front Left', initialPos: [-4, -4, 2], targetPos: [-0.35, -1.05, 0.25], dimensions: [0.28, 0.25, 0.35], color: '#fed7aa', type: 'box' },
      { id: 'kc10', name: 'Paw Front Right', initialPos: [4, -4, -2], targetPos: [0.35, -1.05, 0.25], dimensions: [0.28, 0.25, 0.35], color: '#fed7aa', type: 'box' },
      { id: 'kc11', name: 'Paw Back Left', initialPos: [-2, -5, 4], targetPos: [-0.35, -1.05, -0.25], dimensions: [0.28, 0.25, 0.35], color: '#fed7aa', type: 'box' },
      { id: 'kc12', name: 'Paw Back Right', initialPos: [2, -5, -4], targetPos: [0.35, -1.05, -0.25], dimensions: [0.28, 0.25, 0.35], color: '#fed7aa', type: 'box' },

      { id: 'kc13', name: 'Tail', initialPos: [5, 1, 0], targetPos: [0.85, -0.35, -0.25], dimensions: [0.12, 0.12, 1.05], color: '#fdba74', type: 'cylinder', rotation: [0.1, 0.25, 1.57] },
      { id: 'kc14', name: 'Collar', initialPos: [0, 0, -5], targetPos: [0, 0.25, 0], dimensions: [1.02, 0.14, 0.78], color: '#ef4444', type: 'box' },
      { id: 'kc15', name: 'Bell', initialPos: [0, 0, 5], targetPos: [0, 0.15, 0.45], dimensions: [0.14, 0, 0], color: '#facc15', type: 'sphere' },
    ]
  },
  {
    id: 57,
    title: "Ancient Pyramid",
    emoji: "🔺",
    background: "#fffbeb",
    parts: [
      { id: 'ap1', name: 'Base Layer', initialPos: [0, -6, 0], targetPos: [0, -1.2, 0], dimensions: [2.6, 0.55, 2.6], color: '#d97706', type: 'box' },
      { id: 'ap2', name: 'Mid Layer', initialPos: [-5, -1, 3], targetPos: [0, -0.65, 0], dimensions: [2.0, 0.5, 2.0], color: '#eab308', type: 'box' },
      { id: 'ap3', name: 'Upper Layer', initialPos: [5, 0, -3], targetPos: [0, -0.2, 0], dimensions: [1.45, 0.45, 1.45], color: '#f59e0b', type: 'box' },
      { id: 'ap4', name: 'Capstone', initialPos: [0, 6, 0], targetPos: [0, 0.25, 0], dimensions: [0.55, 0.35, 0.55], color: '#fbbf24', type: 'box' },

      { id: 'ap5', name: 'Entrance', initialPos: [0, -3, 5], targetPos: [0, -1.05, 1.31], dimensions: [0.55, 0.65, 0.08], color: '#1f2937', type: 'box' },
      { id: 'ap6', name: 'Stair Strip', initialPos: [3, -2, 5], targetPos: [0, -0.85, 1.15], dimensions: [1.1, 0.12, 0.08], color: '#9a3412', type: 'box' },

      { id: 'ap7', name: 'Side Glyph A', initialPos: [-4, 2, 4], targetPos: [-0.85, -0.75, 0.75], dimensions: [0.35, 0.35, 0.05], color: '#92400e', type: 'box', rotation: [0, 0.7, 0] },
      { id: 'ap8', name: 'Side Glyph B', initialPos: [4, 2, -4], targetPos: [0.85, -0.75, 0.75], dimensions: [0.35, 0.35, 0.05], color: '#92400e', type: 'box', rotation: [0, -0.7, 0] },
      { id: 'ap9', name: 'Sun Jewel', initialPos: [0, 7, 2], targetPos: [0, 0.55, 0.85], dimensions: [0.18, 0, 0], color: '#fde047', type: 'sphere' },
    ]
  },
  {
    id: 58,
    title: "Magic Potion",
    emoji: "🧪",
    background: "#f5f3ff",
    parts: [
      { id: 'mp1', name: 'Bottle Base', initialPos: [0, -6, 0], targetPos: [0, -0.9, 0], dimensions: [0.95, 0.95, 1.45], color: '#60a5fa', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'mp2', name: 'Bottle Neck', initialPos: [0, 6, -2], targetPos: [0, 0.3, 0], dimensions: [0.35, 0.35, 0.9], color: '#93c5fd', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'mp3', name: 'Cork', initialPos: [3, 6, 0], targetPos: [0, 0.95, 0], dimensions: [0.28, 0.28, 0.35], color: '#92400e', type: 'cylinder' },
      { id: 'mp4', name: 'Label', initialPos: [-3, 1, 4], targetPos: [0, -0.45, 0.62], dimensions: [0.75, 0.55, 0.05], color: '#f8fafc', type: 'box' },
      { id: 'mp5', name: 'Skull Icon', initialPos: [0, 2, 5], targetPos: [0, -0.45, 0.65], dimensions: [0.12, 0, 0], color: '#111827', type: 'sphere' },

      { id: 'mp6', name: 'Liquid', initialPos: [0, 0, -5], targetPos: [0, -0.95, 0], dimensions: [0.82, 0.82, 0.9], color: '#a78bfa', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'mp7', name: 'Bubble A', initialPos: [-2, 4, 0], targetPos: [-0.22, -0.65, 0.15], dimensions: [0.11, 0, 0], color: '#c4b5fd', type: 'sphere' },
      { id: 'mp8', name: 'Bubble B', initialPos: [2, 4, 0], targetPos: [0.25, -0.35, -0.1], dimensions: [0.09, 0, 0], color: '#ddd6fe', type: 'sphere' },
      { id: 'mp9', name: 'Bubble C', initialPos: [0, 5, 2], targetPos: [0.0, -0.15, 0.05], dimensions: [0.08, 0, 0], color: '#ddd6fe', type: 'sphere' },

      { id: 'mp10', name: 'Glow Ring', initialPos: [0, -2, 5], targetPos: [0, -0.05, 0], dimensions: [1.05, 0.08, 1.05], color: '#a78bfa', type: 'box' },
    ]
  },
  {
    id: 59,
    title: "Japanese Torii Gate",
    emoji: "⛩️",
    background: "#fff7ed",
    parts: [
      { id: 'tg1', name: 'Left Pillar', initialPos: [-5, -6, 0], targetPos: [-0.9, -0.75, 0], dimensions: [0.25, 1.9, 0.25], color: '#ef4444', type: 'box' },
      { id: 'tg2', name: 'Right Pillar', initialPos: [5, -6, 0], targetPos: [0.9, -0.75, 0], dimensions: [0.25, 1.9, 0.25], color: '#ef4444', type: 'box' },
      { id: 'tg3', name: 'Top Beam', initialPos: [0, 6, 0], targetPos: [0, 0.55, 0], dimensions: [2.3, 0.22, 0.35], color: '#dc2626', type: 'box' },
      { id: 'tg4', name: 'Upper Beam', initialPos: [0, 4, 4], targetPos: [0, 0.2, 0], dimensions: [2.0, 0.18, 0.28], color: '#b91c1c', type: 'box' },
      { id: 'tg5', name: 'Center Plaque', initialPos: [0, 5, -4], targetPos: [0, 0.35, 0.2], dimensions: [0.45, 0.35, 0.08], color: '#111827', type: 'box' },

      { id: 'tg6', name: 'Base Foot Left', initialPos: [-4, -5, 3], targetPos: [-0.9, -1.75, 0], dimensions: [0.4, 0.18, 0.4], color: '#991b1b', type: 'box' },
      { id: 'tg7', name: 'Base Foot Right', initialPos: [4, -5, -3], targetPos: [0.9, -1.75, 0], dimensions: [0.4, 0.18, 0.4], color: '#991b1b', type: 'box' },
      { id: 'tg8', name: 'Gold Accent', initialPos: [0, 0, 5], targetPos: [0, -0.1, 0], dimensions: [1.95, 0.05, 0.3], color: '#facc15', type: 'box' },
    ]
  },
  {
    id: 60,
    title: "Baby Dragon",
    emoji: "🐲",
    background: "#ecfccb",
    parts: [
      { id: 'bd1', name: 'Body', initialPos: [0, -6, 0], targetPos: [0, -0.55, 0], dimensions: [1.35, 0.85, 1.1], color: '#22c55e', type: 'box' },
      { id: 'bd2', name: 'Belly', initialPos: [0, -1, 5], targetPos: [0, -0.55, 0.62], dimensions: [0.9, 0.6, 0.08], color: '#bbf7d0', type: 'box' },
      { id: 'bd3', name: 'Head', initialPos: [4, 4, 0], targetPos: [0.95, 0.25, 0.55], dimensions: [0.65, 0.55, 0.65], color: '#16a34a', type: 'box' },
      { id: 'bd4', name: 'Snout', initialPos: [6, 2, 0], targetPos: [1.45, 0.2, 0.75], dimensions: [0.35, 0.3, 0.4], color: '#22c55e', type: 'box' },

      { id: 'bd5', name: 'Horn Left', initialPos: [2, 7, 2], targetPos: [0.75, 0.65, 0.9], dimensions: [0.06, 0.22, 0.06], color: '#fbbf24', type: 'cylinder' },
      { id: 'bd6', name: 'Horn Right', initialPos: [2, 7, -2], targetPos: [1.15, 0.65, 0.9], dimensions: [0.06, 0.22, 0.06], color: '#fbbf24', type: 'cylinder' },

      { id: 'bd7', name: 'Wing Left', initialPos: [-6, 3, 3], targetPos: [-0.6, 0.15, 0.15], dimensions: [0.9, 0.55, 0.08], color: '#86efac', type: 'box', rotation: [0.2, 0.0, 0.6] },
      { id: 'bd8', name: 'Wing Right', initialPos: [-6, 3, -3], targetPos: [-0.6, 0.15, -0.15], dimensions: [0.9, 0.55, 0.08], color: '#86efac', type: 'box', rotation: [-0.2, 0.0, 0.6] },

      { id: 'bd9', name: 'Leg Front Left', initialPos: [3, -5, 3], targetPos: [0.55, -1.25, 0.35], dimensions: [0.25, 0.65, 0.25], color: '#16a34a', type: 'box' },
      { id: 'bd10', name: 'Leg Front Right', initialPos: [3, -5, -3], targetPos: [0.55, -1.25, -0.35], dimensions: [0.25, 0.65, 0.25], color: '#16a34a', type: 'box' },
      { id: 'bd11', name: 'Leg Back Left', initialPos: [-3, -5, 3], targetPos: [-0.55, -1.25, 0.35], dimensions: [0.25, 0.65, 0.25], color: '#16a34a', type: 'box' },
      { id: 'bd12', name: 'Leg Back Right', initialPos: [-3, -5, -3], targetPos: [-0.55, -1.25, -0.35], dimensions: [0.25, 0.65, 0.25], color: '#16a34a', type: 'box' },

      { id: 'bd13', name: 'Tail', initialPos: [-6, 0, 0], targetPos: [-1.15, -0.75, -0.45], dimensions: [0.18, 0.18, 1.35], color: '#22c55e', type: 'cylinder', rotation: [0.0, 0.35, 1.57] },
      { id: 'bd14', name: 'Fire Puff', initialPos: [6, 4, 0], targetPos: [1.85, 0.25, 0.85], dimensions: [0.22, 0, 0], color: '#fb7185', type: 'sphere' },
    ]
  },
  {
    id: 61,
    title: "Volcano Island",
    emoji: "🌋",
    background: "#0f172a",
    parts: [
      { id: 'vi1', name: 'Island Base', initialPos: [0, -6, 0], targetPos: [0, -1.4, 0], dimensions: [2.6, 0.4, 2.6], color: '#78350f', type: 'cylinder' },
      { id: 'vi2', name: 'Volcano Body', initialPos: [-4, 0, 3], targetPos: [0, -0.4, 0], dimensions: [1.4, 1.1, 1.4], color: '#7c2d12', type: 'cylinder' },
      { id: 'vi3', name: 'Lava Pool', initialPos: [4, 2, -3], targetPos: [0, 0.38, 0], dimensions: [0.75, 0.75, 0.06], color: '#fb7185', type: 'cylinder' },
      { id: 'vi4', name: 'Lava Splash A', initialPos: [-3, 5, 2], targetPos: [-0.25, 0.75, 0.15], dimensions: [0.18, 0, 0], color: '#f97316', type: 'sphere' },
      { id: 'vi5', name: 'Lava Splash B', initialPos: [3, 5, -2], targetPos: [0.25, 0.9, -0.15], dimensions: [0.14, 0, 0], color: '#fb7185', type: 'sphere' },
      { id: 'vi6', name: 'Palm Trunk', initialPos: [-5, 1, -2], targetPos: [-1.1, -0.75, 0.7], dimensions: [0.12, 1.2, 0.12], color: '#78350f', type: 'cylinder', rotation: [0, 0, -0.2] },
      { id: 'vi7', name: 'Palm Leaf', initialPos: [-5, 4, -2], targetPos: [-0.85, -0.05, 0.75], dimensions: [0.9, 0.08, 0.25], color: '#16a34a', type: 'box', rotation: [0.2, 0.1, 0.5] },
      { id: 'vi8', name: 'Smoke Puff', initialPos: [0, 7, 0], targetPos: [0.0, 1.2, 0], dimensions: [0.35, 0, 0], color: '#e2e8f0', type: 'sphere' },
    ]
  },
  {
    id: 62,
    title: "Frost Castle",
    emoji: "❄️",
    background: "#e0f2fe",
    parts: [
      { id: 'fc1', name: 'Main Keep', initialPos: [0, -6, 0], targetPos: [0, -0.6, 0], dimensions: [1.6, 1.6, 1.2], color: '#93c5fd', type: 'box' },
      { id: 'fc2', name: 'Left Tower', initialPos: [-5, 0, 3], targetPos: [-1.1, -0.3, 0], dimensions: [0.65, 1.9, 0.65], color: '#60a5fa', type: 'cylinder' },
      { id: 'fc3', name: 'Right Tower', initialPos: [5, 0, -3], targetPos: [1.1, -0.3, 0], dimensions: [0.65, 1.9, 0.65], color: '#60a5fa', type: 'cylinder' },
      { id: 'fc4', name: 'Left Roof', initialPos: [-4, 6, 2], targetPos: [-1.1, 0.85, 0], dimensions: [0.7, 0.5, 0.7], color: '#1d4ed8', type: 'box' },
      { id: 'fc5', name: 'Right Roof', initialPos: [4, 6, -2], targetPos: [1.1, 0.85, 0], dimensions: [0.7, 0.5, 0.7], color: '#1d4ed8', type: 'box' },
      { id: 'fc6', name: 'Gate', initialPos: [0, -3, 5], targetPos: [0, -0.75, 0.62], dimensions: [0.55, 0.9, 0.12], color: '#0f172a', type: 'box' },
      { id: 'fc7', name: 'Banner Left', initialPos: [-3, 2, -5], targetPos: [-0.55, 0.15, 0.62], dimensions: [0.2, 0.7, 0.05], color: '#fbbf24', type: 'box' },
      { id: 'fc8', name: 'Snowflake Gem', initialPos: [0, 7, 0], targetPos: [0, 1.25, 0.25], dimensions: [0.2, 0, 0], color: '#ffffff', type: 'sphere' },
    ]
  },
  {
    id: 63,
    title: "Soccer Ball",
    emoji: "⚽",
    background: "#f1f5f9",
    parts: [
      { id: 'sbx1', name: 'Core Sphere', initialPos: [0, 6, 0], targetPos: [0, 0, 0], dimensions: [0.95, 0, 0], color: '#ffffff', type: 'sphere' },
      { id: 'sbx2', name: 'Patch Top', initialPos: [-4, 3, 0], targetPos: [0, 0.7, 0], dimensions: [0.35, 0.35, 0.05], color: '#111827', type: 'box' },
      { id: 'sbx3', name: 'Patch Bottom', initialPos: [4, -3, 0], targetPos: [0, -0.7, 0], dimensions: [0.35, 0.35, 0.05], color: '#111827', type: 'box' },
      { id: 'sbx4', name: 'Patch Front', initialPos: [0, 2, 5], targetPos: [0, 0, 0.78], dimensions: [0.35, 0.35, 0.05], color: '#111827', type: 'box' },
      { id: 'sbx5', name: 'Patch Back', initialPos: [0, 2, -5], targetPos: [0, 0, -0.78], dimensions: [0.35, 0.35, 0.05], color: '#111827', type: 'box' },
      { id: 'sbx6', name: 'Patch Left', initialPos: [-5, 1, 0], targetPos: [-0.78, 0, 0], dimensions: [0.35, 0.35, 0.05], color: '#111827', type: 'box', rotation: [0, 1.57, 0] },
      { id: 'sbx7', name: 'Patch Right', initialPos: [5, 1, 0], targetPos: [0.78, 0, 0], dimensions: [0.35, 0.35, 0.05], color: '#111827', type: 'box', rotation: [0, 1.57, 0] },
      { id: 'sbx8', name: 'Shine Dot', initialPos: [2, 6, 2], targetPos: [0.35, 0.35, 0.55], dimensions: [0.14, 0, 0], color: '#e2e8f0', type: 'sphere' },
    ]
  },
  {
    id: 64,
    title: "Retro TV",
    emoji: "📺",
    background: "#f8fafc",
    parts: [
      { id: 'tv1', name: 'TV Body', initialPos: [0, -6, 0], targetPos: [0, -0.2, 0], dimensions: [2.0, 1.4, 0.9], color: '#334155', type: 'box' },
      { id: 'tv2', name: 'Screen', initialPos: [0, 0, 6], targetPos: [0, 0.05, 0.46], dimensions: [1.45, 0.95, 0.08], color: '#0ea5e9', type: 'box' },
      { id: 'tv3', name: 'Bezel', initialPos: [-4, 2, 0], targetPos: [0, 0.05, 0.44], dimensions: [1.65, 1.1, 0.05], color: '#0f172a', type: 'box' },
      { id: 'tv4', name: 'Left Dial', initialPos: [-4, 0, 4], targetPos: [-0.7, -0.35, 0.46], dimensions: [0.18, 0, 0], color: '#facc15', type: 'sphere' },
      { id: 'tv5', name: 'Right Dial', initialPos: [-4, 0, -4], targetPos: [-0.35, -0.35, 0.46], dimensions: [0.18, 0, 0], color: '#facc15', type: 'sphere' },
      { id: 'tv6', name: 'Speaker Grill', initialPos: [4, -1, 4], targetPos: [0.7, -0.2, 0.46], dimensions: [0.55, 0.7, 0.05], color: '#111827', type: 'box' },
      { id: 'tv7', name: 'Antenna Left', initialPos: [-2, 7, 2], targetPos: [-0.25, 0.95, 0], dimensions: [0.05, 0.8, 0.05], color: '#94a3b8', type: 'cylinder', rotation: [0, 0, 0.45] },
      { id: 'tv8', name: 'Antenna Right', initialPos: [2, 7, -2], targetPos: [0.25, 0.95, 0], dimensions: [0.05, 0.8, 0.05], color: '#94a3b8', type: 'cylinder', rotation: [0, 0, -0.45] },
      { id: 'tv9', name: 'Stand', initialPos: [0, -7, 2], targetPos: [0, -1.05, 0], dimensions: [1.2, 0.2, 0.7], color: '#1f2937', type: 'box' },
    ]
  },
  {
    id: 65,
    title: "Cherry Blossom",
    emoji: "🌸",
    background: "#fff1f2",
    parts: [
      { id: 'cb1', name: 'Branch', initialPos: [-6, -1, 0], targetPos: [0, -0.8, 0], dimensions: [0.18, 0.18, 2.2], color: '#78350f', type: 'cylinder', rotation: [0.2, 0.2, 1.57] },
      { id: 'cb2', name: 'Branch Tip', initialPos: [6, 1, 0], targetPos: [0.75, -0.2, 0.55], dimensions: [0.12, 0.12, 1.2], color: '#92400e', type: 'cylinder', rotation: [0.2, -0.1, 1.57] },
      { id: 'cb3', name: 'Flower A', initialPos: [-4, 5, 2], targetPos: [0.95, 0.45, 0.75], dimensions: [0.25, 0, 0], color: '#fda4af', type: 'sphere' },
      { id: 'cb4', name: 'Flower B', initialPos: [4, 5, -2], targetPos: [0.45, 0.65, 0.55], dimensions: [0.22, 0, 0], color: '#fbcfe8', type: 'sphere' },
      { id: 'cb5', name: 'Flower C', initialPos: [-2, 6, -3], targetPos: [0.2, 0.35, 0.25], dimensions: [0.2, 0, 0], color: '#fda4af', type: 'sphere' },
      { id: 'cb6', name: 'Flower D', initialPos: [2, 6, 3], targetPos: [0.65, 0.15, 0.35], dimensions: [0.2, 0, 0], color: '#fbcfe8', type: 'sphere' },
      { id: 'cb7', name: 'Leaf A', initialPos: [-5, 2, -2], targetPos: [0.25, -0.35, -0.2], dimensions: [0.35, 0.08, 0.18], color: '#22c55e', type: 'box', rotation: [0.3, 0.2, 0.2] },
      { id: 'cb8', name: 'Leaf B', initialPos: [5, 2, 2], targetPos: [0.55, -0.1, -0.05], dimensions: [0.35, 0.08, 0.18], color: '#16a34a', type: 'box', rotation: [-0.2, -0.2, -0.2] },
    ]
  },
  {
    id: 66,
    title: "Deep Submarine",
    emoji: "🛥️",
    background: "#0b1324",
    parts: [
      { id: 'ds1', name: 'Hull', initialPos: [0, -6, 0], targetPos: [0, -0.4, 0], dimensions: [2.4, 0.8, 0.8], color: '#facc15', type: 'capsule' },
      { id: 'ds2', name: 'Nose Cap', initialPos: [6, 0, 0], targetPos: [1.4, -0.4, 0], dimensions: [0.45, 0, 0], color: '#fde68a', type: 'sphere' },
      { id: 'ds3', name: 'Tail Cap', initialPos: [-6, 0, 0], targetPos: [-1.4, -0.4, 0], dimensions: [0.45, 0, 0], color: '#fde68a', type: 'sphere' },
      { id: 'ds4', name: 'Periscope', initialPos: [0, 6, 0], targetPos: [0.2, 0.65, 0], dimensions: [0.08, 0.8, 0.08], color: '#94a3b8', type: 'cylinder' },
      { id: 'ds5', name: 'Window A', initialPos: [0, 4, 4], targetPos: [0.3, -0.35, 0.55], dimensions: [0.18, 0, 0], color: '#38bdf8', type: 'sphere' },
      { id: 'ds6', name: 'Window B', initialPos: [0, 4, -4], targetPos: [-0.15, -0.35, 0.55], dimensions: [0.18, 0, 0], color: '#38bdf8', type: 'sphere' },
      { id: 'ds7', name: 'Propeller', initialPos: [-6, -2, 3], targetPos: [-1.55, -0.45, 0], dimensions: [0.12, 0.12, 0.45], color: '#e2e8f0', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'ds8', name: 'Fin', initialPos: [-2, -2, 6], targetPos: [-0.9, -0.1, 0], dimensions: [0.35, 0.25, 0.08], color: '#f59e0b', type: 'box' },
    ]
  },
  {
    id: 67,
    title: "Street Hotdog",
    emoji: "🌭",
    background: "#fff7ed",
    parts: [
      { id: 'hd1', name: 'Bun Bottom', initialPos: [0, -6, 0], targetPos: [0, -1.0, 0], dimensions: [1.9, 0.35, 0.9], color: '#d97706', type: 'capsule' },
      { id: 'hd2', name: 'Sausage', initialPos: [0, 2, 5], targetPos: [0, -0.75, 0], dimensions: [1.75, 0.35, 0.35], color: '#b45309', type: 'capsule' },
      { id: 'hd3', name: 'Bun Top', initialPos: [0, 6, 0], targetPos: [0, -0.55, 0], dimensions: [1.95, 0.35, 0.95], color: '#f59e0b', type: 'capsule' },
      { id: 'hd4', name: 'Ketchup Stripe', initialPos: [-4, 3, -3], targetPos: [0, -0.55, 0.2], dimensions: [1.6, 0.08, 0.12], color: '#ef4444', type: 'box', rotation: [0, 0.2, 0.2] },
      { id: 'hd5', name: 'Mustard Stripe', initialPos: [4, 3, 3], targetPos: [0, -0.55, -0.2], dimensions: [1.6, 0.08, 0.12], color: '#facc15', type: 'box', rotation: [0, -0.2, -0.2] },
      { id: 'hd6', name: 'Pickle A', initialPos: [-3, 5, 0], targetPos: [-0.55, -0.35, 0.05], dimensions: [0.25, 0.08, 0.12], color: '#22c55e', type: 'box' },
      { id: 'hd7', name: 'Sesame A', initialPos: [-2, 7, 2], targetPos: [-0.35, -0.2, 0.25], dimensions: [0.06, 0, 0], color: '#fef3c7', type: 'sphere' },
      { id: 'hd8', name: 'Sesame B', initialPos: [2, 7, -2], targetPos: [0.25, -0.25, -0.2], dimensions: [0.06, 0, 0], color: '#fef3c7', type: 'sphere' },
    ]
  },
  {
    id: 68,
    title: "Crystal Snowflake",
    emoji: "❄️",
    background: "#ecfeff",
    parts: [
      { id: 'sfk1', name: 'Center', initialPos: [0, 6, 0], targetPos: [0, 0, 0], dimensions: [0.22, 0, 0], color: '#e0f2fe', type: 'sphere' },
      { id: 'sfk2', name: 'Arm Up', initialPos: [0, 0, 6], targetPos: [0, 0.8, 0], dimensions: [0.08, 0.08, 1.6], color: '#93c5fd', type: 'cylinder' },
      { id: 'sfk3', name: 'Arm Down', initialPos: [0, 0, -6], targetPos: [0, -0.8, 0], dimensions: [0.08, 0.08, 1.6], color: '#93c5fd', type: 'cylinder' },
      { id: 'sfk4', name: 'Arm Left', initialPos: [-6, 0, 0], targetPos: [-0.8, 0, 0], dimensions: [0.08, 0.08, 1.6], color: '#93c5fd', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'sfk5', name: 'Arm Right', initialPos: [6, 0, 0], targetPos: [0.8, 0, 0], dimensions: [0.08, 0.08, 1.6], color: '#93c5fd', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'sfk6', name: 'Tip A', initialPos: [-4, 5, 2], targetPos: [0, 1.55, 0], dimensions: [0.14, 0, 0], color: '#ffffff', type: 'sphere' },
      { id: 'sfk7', name: 'Tip B', initialPos: [4, 5, -2], targetPos: [0, -1.55, 0], dimensions: [0.14, 0, 0], color: '#ffffff', type: 'sphere' },
      { id: 'sfk8', name: 'Tip C', initialPos: [5, 2, 4], targetPos: [1.55, 0, 0], dimensions: [0.14, 0, 0], color: '#ffffff', type: 'sphere' },
    ]
  },
  {
    id: 69,
    title: "Temple Gate",
    emoji: "🛕",
    background: "#fffbeb",
    parts: [
      { id: 'tgx1', name: 'Base', initialPos: [0, -6, 0], targetPos: [0, -1.35, 0], dimensions: [2.6, 0.35, 1.8], color: '#a16207', type: 'box' },
      { id: 'tgx2', name: 'Left Pillar', initialPos: [-6, -2, 2], targetPos: [-0.9, -0.35, 0], dimensions: [0.3, 1.6, 0.3], color: '#92400e', type: 'box' },
      { id: 'tgx3', name: 'Right Pillar', initialPos: [6, -2, -2], targetPos: [0.9, -0.35, 0], dimensions: [0.3, 1.6, 0.3], color: '#92400e', type: 'box' },
      { id: 'tgx4', name: 'Roof Lower', initialPos: [0, 6, 0], targetPos: [0, 0.55, 0], dimensions: [2.2, 0.25, 1.2], color: '#b45309', type: 'box' },
      { id: 'tgx5', name: 'Roof Upper', initialPos: [0, 7, 3], targetPos: [0, 0.95, 0], dimensions: [1.6, 0.25, 0.9], color: '#d97706', type: 'box' },
      { id: 'tgx6', name: 'Door', initialPos: [0, -1, 6], targetPos: [0, -0.7, 0.62], dimensions: [0.65, 0.95, 0.08], color: '#1f2937', type: 'box' },
      { id: 'tgx7', name: 'Bell', initialPos: [0, 5, -6], targetPos: [0, 0.25, 0.55], dimensions: [0.18, 0.22, 0.18], color: '#facc15', type: 'cylinder' },
      { id: 'tgx8', name: 'Top Ornament', initialPos: [0, 8, 0], targetPos: [0, 1.25, 0], dimensions: [0.2, 0, 0], color: '#fde047', type: 'sphere' },
    ]
  },
  {
    id: 70,
    title: "Coastal Lighthouse",
    emoji: "🗼",
    background: "#eff6ff",
    parts: [
      { id: 'lh1', name: 'Base', initialPos: [0, -7, 0], targetPos: [0, -1.5, 0], dimensions: [1.6, 0.35, 1.6], color: '#0f172a', type: 'cylinder' },
      { id: 'lh2', name: 'Tower Lower', initialPos: [-4, -2, 3], targetPos: [0, -0.75, 0], dimensions: [0.7, 0.7, 1.6], color: '#ef4444', type: 'cylinder' },
      { id: 'lh3', name: 'Tower Upper', initialPos: [4, 0, -3], targetPos: [0, 0.35, 0], dimensions: [0.55, 0.55, 1.4], color: '#ffffff', type: 'cylinder' },
      { id: 'lh4', name: 'Lantern Room', initialPos: [0, 6, 0], targetPos: [0, 1.2, 0], dimensions: [0.65, 0.65, 0.5], color: '#334155', type: 'box' },
      { id: 'lh5', name: 'Glass', initialPos: [0, 6, 5], targetPos: [0, 1.2, 0.35], dimensions: [0.55, 0.35, 0.08], color: '#38bdf8', type: 'box' },
      { id: 'lh6', name: 'Top Cap', initialPos: [0, 8, 2], targetPos: [0, 1.55, 0], dimensions: [0.7, 0.2, 0.7], color: '#0f172a', type: 'box' },
      { id: 'lh7', name: 'Light Beam', initialPos: [6, 4, 0], targetPos: [0.95, 1.2, 0], dimensions: [0.35, 0.2, 0.35], color: '#fde047', type: 'sphere' },
      { id: 'lh8', name: 'Door', initialPos: [0, -3, 6], targetPos: [0, -1.05, 0.55], dimensions: [0.35, 0.6, 0.08], color: '#1f2937', type: 'box' },
    ]
  },
  {
    id: 71,
    title: "Electric Scooter",
    emoji: "🛴",
    background: "#f1f5f9",
    parts: [
      { id: 'es1', name: 'Deck', initialPos: [0, -6, 0], targetPos: [0, -1.05, 0], dimensions: [1.9, 0.18, 0.45], color: '#111827', type: 'box' },
      { id: 'es2', name: 'Stem', initialPos: [0, 6, -3], targetPos: [0.65, -0.15, 0], dimensions: [0.12, 1.7, 0.12], color: '#334155', type: 'cylinder', rotation: [0, 0, -0.35] },
      { id: 'es3', name: 'Handlebar', initialPos: [4, 6, 0], targetPos: [0.95, 0.7, 0], dimensions: [0.05, 0.05, 1.1], color: '#334155', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'es4', name: 'Wheel Front', initialPos: [4, -6, 2], targetPos: [0.9, -1.15, 0], dimensions: [0.35, 0.35, 0.18], color: '#0f172a', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'es5', name: 'Wheel Back', initialPos: [-4, -6, -2], targetPos: [-0.9, -1.15, 0], dimensions: [0.35, 0.35, 0.18], color: '#0f172a', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'es6', name: 'Front Fork', initialPos: [2, -2, 5], targetPos: [0.65, -0.75, 0], dimensions: [0.08, 0.6, 0.08], color: '#64748b', type: 'cylinder', rotation: [0, 0, -0.35] },
      { id: 'es7', name: 'Rear Fender', initialPos: [-2, 0, 5], targetPos: [-0.95, -0.95, 0], dimensions: [0.45, 0.15, 0.35], color: '#111827', type: 'box' },
      { id: 'es8', name: 'Headlight', initialPos: [6, 2, 0], targetPos: [0.95, 0.55, 0], dimensions: [0.14, 0, 0], color: '#fde047', type: 'sphere' },
    ]
  },
  {
    id: 72,
    title: "Panda Buddy",
    emoji: "🐼",
    background: "#f8fafc",
    parts: [
      { id: 'pd1', name: 'Body', initialPos: [0, -6, 0], targetPos: [0, -0.6, 0], dimensions: [1.1, 1.3, 0.9], color: '#ffffff', type: 'capsule', rotation: [1.57, 0, 0] },
      { id: 'pd2', name: 'Head', initialPos: [0, 6, 0], targetPos: [0, 0.75, 0], dimensions: [0.7, 0, 0], color: '#ffffff', type: 'sphere' },
      { id: 'pd3', name: 'Ear Left', initialPos: [-4, 6, 2], targetPos: [-0.45, 1.15, 0.2], dimensions: [0.18, 0, 0], color: '#111827', type: 'sphere' },
      { id: 'pd4', name: 'Ear Right', initialPos: [4, 6, -2], targetPos: [0.45, 1.15, 0.2], dimensions: [0.18, 0, 0], color: '#111827', type: 'sphere' },
      { id: 'pd5', name: 'Eye Patch Left', initialPos: [-3, 3, 4], targetPos: [-0.25, 0.8, 0.55], dimensions: [0.22, 0.18, 0.08], color: '#111827', type: 'box' },
      { id: 'pd6', name: 'Eye Patch Right', initialPos: [3, 3, -4], targetPos: [0.25, 0.8, 0.55], dimensions: [0.22, 0.18, 0.08], color: '#111827', type: 'box' },
      { id: 'pd7', name: 'Nose', initialPos: [0, 3, 6], targetPos: [0, 0.65, 0.62], dimensions: [0.1, 0, 0], color: '#111827', type: 'sphere' },
      { id: 'pd8', name: 'Bamboo', initialPos: [6, 0, 0], targetPos: [0.95, -0.45, 0.55], dimensions: [0.12, 0.12, 1.6], color: '#22c55e', type: 'cylinder', rotation: [0.2, 0.2, 1.57] },
      { id: 'pd9', name: 'Arm', initialPos: [-6, 0, 0], targetPos: [-0.65, -0.25, 0.35], dimensions: [0.3, 0.6, 0.3], color: '#111827', type: 'capsule', rotation: [0.2, 0, 1.2] },
    ]
  },
  {
    id: 73,
    title: "Robot Puppy",
    emoji: "🤖",
    background: "#e0f2fe",
    parts: [
      { id: 'rpu1', name: 'Body', initialPos: [0, -6, 0], targetPos: [0, -0.6, 0], dimensions: [1.4, 0.7, 0.8], color: '#94a3b8', type: 'box' },
      { id: 'rpu2', name: 'Head', initialPos: [4, 3, 0], targetPos: [1.05, -0.2, 0], dimensions: [0.6, 0.5, 0.55], color: '#cbd5e1', type: 'box' },
      { id: 'rpu3', name: 'Ear Left', initialPos: [4, 6, 2], targetPos: [1.05, 0.25, 0.35], dimensions: [0.15, 0.25, 0.08], color: '#64748b', type: 'box', rotation: [0, 0.3, 0.3] },
      { id: 'rpu4', name: 'Ear Right', initialPos: [4, 6, -2], targetPos: [1.05, 0.25, -0.35], dimensions: [0.15, 0.25, 0.08], color: '#64748b', type: 'box', rotation: [0, -0.3, -0.3] },
      { id: 'rpu5', name: 'Leg Front', initialPos: [2, -6, 3], targetPos: [0.55, -1.05, 0.35], dimensions: [0.18, 0.55, 0.18], color: '#475569', type: 'cylinder' },
      { id: 'rpu6', name: 'Leg Back', initialPos: [-2, -6, -3], targetPos: [-0.55, -1.05, -0.35], dimensions: [0.18, 0.55, 0.18], color: '#475569', type: 'cylinder' },
      { id: 'rpu7', name: 'Tail Antenna', initialPos: [-6, 2, 0], targetPos: [-0.95, -0.45, 0], dimensions: [0.06, 0.8, 0.06], color: '#475569', type: 'cylinder', rotation: [0.2, 0, 0.6] },
      { id: 'rpu8', name: 'Tail Tip', initialPos: [-6, 4, 0], targetPos: [-1.2, -0.1, 0], dimensions: [0.12, 0, 0], color: '#ef4444', type: 'sphere' },
      { id: 'rpu9', name: 'Eye LED', initialPos: [6, 4, 0], targetPos: [1.28, -0.15, 0.2], dimensions: [0.08, 0, 0], color: '#22c55e', type: 'sphere' },
    ]
  },
  {
    id: 74,
    title: "Treasure Map",
    emoji: "🗺️",
    background: "#fffbeb",
    parts: [
      { id: 'tm1', name: 'Map Sheet', initialPos: [0, -6, 0], targetPos: [0, -0.6, 0], dimensions: [2.4, 0.12, 1.6], color: '#fef3c7', type: 'box' },
      { id: 'tm2', name: 'Left Roll', initialPos: [-6, 0, 0], targetPos: [-1.25, -0.6, 0], dimensions: [0.18, 0.18, 1.6], color: '#d97706', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'tm3', name: 'Right Roll', initialPos: [6, 0, 0], targetPos: [1.25, -0.6, 0], dimensions: [0.18, 0.18, 1.6], color: '#d97706', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'tm4', name: 'Compass Rose', initialPos: [0, 5, 0], targetPos: [-0.6, -0.45, 0.35], dimensions: [0.22, 0, 0], color: '#ef4444', type: 'sphere' },
      { id: 'tm5', name: 'X Mark', initialPos: [4, 2, 4], targetPos: [0.75, -0.45, -0.25], dimensions: [0.25, 0.25, 0.05], color: '#b91c1c', type: 'box', rotation: [0, 0, 0.78] },
      { id: 'tm6', name: 'Path Line', initialPos: [-4, 2, -4], targetPos: [0, -0.48, 0], dimensions: [1.6, 0.05, 0.05], color: '#92400e', type: 'box', rotation: [0, 0.5, 0.1] },
      { id: 'tm7', name: 'Coin', initialPos: [0, 6, 4], targetPos: [0.15, -0.4, 0.25], dimensions: [0.14, 0.14, 0.05], color: '#facc15', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'tm8', name: 'Gem', initialPos: [0, 6, -4], targetPos: [-0.15, -0.4, -0.25], dimensions: [0.12, 0, 0], color: '#60a5fa', type: 'sphere' },
    ]
  },
  {
    id: 75,
    title: "Passenger Plane",
    emoji: "✈️",
    background: "#eff6ff",
    parts: [
      { id: 'pl1', name: 'Fuselage', initialPos: [0, 0, -6], targetPos: [0, -0.3, 0], dimensions: [0.55, 0.55, 2.6], color: '#f8fafc', type: 'cylinder' },
      { id: 'pl2', name: 'Nose', initialPos: [0, 6, 0], targetPos: [0, -0.3, 1.35], dimensions: [0.55, 0, 0], color: '#e2e8f0', type: 'sphere' },
      { id: 'pl3', name: 'Tail Cone', initialPos: [0, -6, 0], targetPos: [0, -0.3, -1.35], dimensions: [0.45, 0, 0], color: '#e2e8f0', type: 'sphere' },
      { id: 'pl4', name: 'Wing Left', initialPos: [-6, 2, 0], targetPos: [-0.95, -0.35, 0], dimensions: [1.9, 0.08, 0.55], color: '#cbd5e1', type: 'box' },
      { id: 'pl5', name: 'Wing Right', initialPos: [6, 2, 0], targetPos: [0.95, -0.35, 0], dimensions: [1.9, 0.08, 0.55], color: '#cbd5e1', type: 'box' },
      { id: 'pl6', name: 'Tail Fin', initialPos: [2, 6, -6], targetPos: [0, 0.35, -1.25], dimensions: [0.08, 0.75, 0.55], color: '#ef4444', type: 'box' },
      { id: 'pl7', name: 'Engine Left', initialPos: [-4, -2, 6], targetPos: [-0.55, -0.6, 0.35], dimensions: [0.22, 0.22, 0.55], color: '#334155', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'pl8', name: 'Engine Right', initialPos: [4, -2, 6], targetPos: [0.55, -0.6, 0.35], dimensions: [0.22, 0.22, 0.55], color: '#334155', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'pl9', name: 'Window', initialPos: [0, 2, 6], targetPos: [0.0, -0.1, 0.55], dimensions: [0.12, 0, 0], color: '#38bdf8', type: 'sphere' },
    ]
  },
  {
    id: 76,
    title: "Quad Drone",
    emoji: "🛸",
    background: "#020617",
    parts: [
      { id: 'qd1', name: 'Center Body', initialPos: [0, -6, 0], targetPos: [0, -0.1, 0], dimensions: [0.7, 0.25, 0.7], color: '#334155', type: 'box' },
      { id: 'qd2', name: 'Arm Front', initialPos: [0, 0, 6], targetPos: [0, -0.1, 0.55], dimensions: [1.2, 0.08, 0.12], color: '#475569', type: 'box' },
      { id: 'qd3', name: 'Arm Back', initialPos: [0, 0, -6], targetPos: [0, -0.1, -0.55], dimensions: [1.2, 0.08, 0.12], color: '#475569', type: 'box' },
      { id: 'qd4', name: 'Arm Left', initialPos: [-6, 0, 0], targetPos: [-0.55, -0.1, 0], dimensions: [0.12, 0.08, 1.2], color: '#475569', type: 'box' },
      { id: 'qd5', name: 'Arm Right', initialPos: [6, 0, 0], targetPos: [0.55, -0.1, 0], dimensions: [0.12, 0.08, 1.2], color: '#475569', type: 'box' },
      { id: 'qd6', name: 'Propeller A', initialPos: [-6, 4, 4], targetPos: [0.55, 0.05, 0.55], dimensions: [0.32, 0.32, 0.06], color: '#e2e8f0', type: 'cylinder' },
      { id: 'qd7', name: 'Propeller B', initialPos: [6, 4, 4], targetPos: [-0.55, 0.05, 0.55], dimensions: [0.32, 0.32, 0.06], color: '#e2e8f0', type: 'cylinder' },
      { id: 'qd8', name: 'Propeller C', initialPos: [-6, 4, -4], targetPos: [0.55, 0.05, -0.55], dimensions: [0.32, 0.32, 0.06], color: '#e2e8f0', type: 'cylinder' },
      { id: 'qd9', name: 'Propeller D', initialPos: [6, 4, -4], targetPos: [-0.55, 0.05, -0.55], dimensions: [0.32, 0.32, 0.06], color: '#e2e8f0', type: 'cylinder' },
      { id: 'qd10', name: 'Camera', initialPos: [0, 3, 6], targetPos: [0, -0.35, 0.55], dimensions: [0.18, 0, 0], color: '#0ea5e9', type: 'sphere' },
    ]
  },
  {

    id: 77,
    title: "The Windmill",
    emoji: "🌬️",
    background: "#e0f2fe",
    parts: [
      { id: 'wm1', name: 'Tower Base', initialPos: [0, -6, 0], targetPos: [0, -1.0, 0], dimensions: [1.4, 2.0, 1.4], color: '#f8fafc', type: 'cylinder' },
      { id: 'wm2', name: 'Tower Top', initialPos: [0, -2, 4], targetPos: [0, 1.0, 0], dimensions: [1.2, 2.0, 1.2], color: '#f8fafc', type: 'cylinder' },
      { id: 'wm3', name: 'Dome Roof', initialPos: [0, 5, 0], targetPos: [0, 2.0, 0], dimensions: [1.2, 0, 0], color: '#ef4444', type: 'sphere' },
      { id: 'wm4', name: 'Blade Hub', initialPos: [0, 2, -5], targetPos: [0, 1.5, 0.8], dimensions: [0.4, 0, 0], color: '#334155', type: 'sphere' },
      { id: 'wm5', name: 'Blade Top', initialPos: [0, 6, 4], targetPos: [0, 2.5, 0.9], dimensions: [0.3, 1.8, 0.05], color: '#cbd5e1', type: 'box' },
      { id: 'wm6', name: 'Blade Left', initialPos: [-5, 4, 0], targetPos: [-0.85, 1.0, 0.9], dimensions: [0.3, 1.8, 0.05], color: '#cbd5e1', type: 'box', rotation: [0, 0, 1.05] }, // ~60 deg
      { id: 'wm7', name: 'Blade Right', initialPos: [5, 4, 0], targetPos: [0.85, 1.0, 0.9], dimensions: [0.3, 1.8, 0.05], color: '#cbd5e1', type: 'box', rotation: [0, 0, -1.05] }, // ~-60 deg
      { id: 'wm8', name: 'Door', initialPos: [0, -4, 3], targetPos: [0, -1.2, 0.72], dimensions: [0.5, 0.8, 0.1], color: '#78350f', type: 'box' },
      { id: 'wm9', name: 'Window', initialPos: [0, 4, -3], targetPos: [0, 0.5, 0.62], dimensions: [0.4, 0.4, 0.1], color: '#334155', type: 'box' },
      { id: 'wm10', name: 'Balcony', initialPos: [0, 0, 0], targetPos: [0, 0.0, 0], dimensions: [1.6, 0.1, 1.6], color: '#334155', type: 'cylinder' },
    ]
  },
  {
    id: 78,
    title: "Hourglass",
    emoji: "⏳",
    background: "#f8fafc",
    parts: [
      { id: 'hg1', name: 'Top Bulb', initialPos: [0, 6, 0], targetPos: [0, 0.7, 0], dimensions: [0.75, 0, 0], color: '#93c5fd', type: 'sphere' },
      { id: 'hg2', name: 'Bottom Bulb', initialPos: [0, -6, 0], targetPos: [0, -0.7, 0], dimensions: [0.75, 0, 0], color: '#93c5fd', type: 'sphere' },
      { id: 'hg3', name: 'Neck Ring', initialPos: [4, 0, 0], targetPos: [0, 0, 0], dimensions: [0.85, 0.12, 0.85], color: '#334155', type: 'box' },
      { id: 'hg4', name: 'Top Cap', initialPos: [-4, 6, 2], targetPos: [0, 1.25, 0], dimensions: [0.95, 0.15, 0.95], color: '#0f172a', type: 'box' },
      { id: 'hg5', name: 'Bottom Cap', initialPos: [4, -6, -2], targetPos: [0, -1.25, 0], dimensions: [0.95, 0.15, 0.95], color: '#0f172a', type: 'box' },
      { id: 'hg6', name: 'Sand Top', initialPos: [-2, 2, 5], targetPos: [0, 0.55, 0], dimensions: [0.55, 0.55, 0.25], color: '#facc15', type: 'cylinder' },
      { id: 'hg7', name: 'Sand Bottom', initialPos: [2, -2, -5], targetPos: [0, -0.55, 0], dimensions: [0.45, 0.45, 0.25], color: '#fde68a', type: 'cylinder' },
      { id: 'hg8', name: 'Sand Stream', initialPos: [0, 4, -5], targetPos: [0, 0, 0], dimensions: [0.04, 0.04, 0.9], color: '#fde68a', type: 'cylinder' },
    ]
  },
  {
    id: 79,
    title: "Viking Helmet",
    emoji: "🪖",
    background: "#f1f5f9",
    parts: [
      { id: 'vh1', name: 'Helmet Dome', initialPos: [0, 0, 6], targetPos: [0, 0, 0], dimensions: [1.05, 0, 0], color: '#94a3b8', type: 'sphere' },
      { id: 'vh2', name: 'Helmet Rim', initialPos: [0, -6, 0], targetPos: [0, -0.55, 0], dimensions: [1.25, 0.18, 1.25], color: '#64748b', type: 'box' },
      { id: 'vh3', name: 'Horn Left', initialPos: [-6, 3, 0], targetPos: [-0.95, 0.35, 0], dimensions: [0.16, 0.16, 1.1], color: '#fef3c7', type: 'cylinder', rotation: [0.2, 0.2, 1.57] },
      { id: 'vh4', name: 'Horn Right', initialPos: [6, 3, 0], targetPos: [0.95, 0.35, 0], dimensions: [0.16, 0.16, 1.1], color: '#fef3c7', type: 'cylinder', rotation: [0.2, -0.2, 1.57] },
      { id: 'vh5', name: 'Nose Guard', initialPos: [0, -2, 6], targetPos: [0, -0.2, 0.75], dimensions: [0.15, 0.7, 0.08], color: '#475569', type: 'box' },
      { id: 'vh6', name: 'Stud A', initialPos: [-4, 2, 4], targetPos: [-0.45, -0.5, 0.75], dimensions: [0.08, 0, 0], color: '#e2e8f0', type: 'sphere' },
      { id: 'vh7', name: 'Stud B', initialPos: [4, 2, 4], targetPos: [0.45, -0.5, 0.75], dimensions: [0.08, 0, 0], color: '#e2e8f0', type: 'sphere' },
      { id: 'vh8', name: 'Top Spike', initialPos: [0, 7, 0], targetPos: [0, 0.95, 0], dimensions: [0.1, 0.25, 0.1], color: '#475569', type: 'cylinder' },
    ]
  },
  {
    id: 80,
    title: "Camp Tent",
    emoji: "⛺",
    background: "#f0fdf4",
    parts: [
      { id: 'ctt1', name: 'Tent Left', initialPos: [-6, 0, 0], targetPos: [-0.45, -0.6, 0], dimensions: [1.2, 1.2, 1.0], color: '#22c55e', type: 'box', rotation: [0, 0, 0.2] },
      { id: 'ctt2', name: 'Tent Right', initialPos: [6, 0, 0], targetPos: [0.45, -0.6, 0], dimensions: [1.2, 1.2, 1.0], color: '#16a34a', type: 'box', rotation: [0, 0, -0.2] },
      { id: 'ctt3', name: 'Front Flap', initialPos: [0, 2, 6], targetPos: [0, -0.5, 0.55], dimensions: [0.85, 0.9, 0.05], color: '#14532d', type: 'box' },
      { id: 'ctt4', name: 'Groundsheet', initialPos: [0, -6, 0], targetPos: [0, -1.25, 0], dimensions: [2.2, 0.12, 1.6], color: '#92400e', type: 'box' },
      { id: 'ctt5', name: 'Pole', initialPos: [0, 6, 0], targetPos: [0, 0.25, 0], dimensions: [0.06, 1.6, 0.06], color: '#f8fafc', type: 'cylinder' },
      { id: 'ctt6', name: 'Stake Left', initialPos: [-4, -4, 4], targetPos: [-0.95, -1.15, 0.65], dimensions: [0.05, 0.25, 0.05], color: '#e2e8f0', type: 'cylinder' },
      { id: 'ctt7', name: 'Stake Right', initialPos: [4, -4, 4], targetPos: [0.95, -1.15, 0.65], dimensions: [0.05, 0.25, 0.05], color: '#e2e8f0', type: 'cylinder' },
      { id: 'ctt8', name: 'Campfire', initialPos: [0, -4, -6], targetPos: [0, -1.1, -0.65], dimensions: [0.18, 0, 0], color: '#f97316', type: 'sphere' },
    ]
  },
  {
    id: 81,
    title: "Candy Gift",
    emoji: "🍬",
    background: "#fdf4ff",
    parts: [
      { id: 'cg1', name: 'Candy Center', initialPos: [0, -6, 0], targetPos: [0, -0.35, 0], dimensions: [1.0, 0.7, 0.7], color: '#a855f7', type: 'box' },
      { id: 'cg2', name: 'Wrapper Left', initialPos: [-6, 0, 0], targetPos: [-0.95, -0.35, 0], dimensions: [0.7, 0.45, 0.05], color: '#f472b6', type: 'box', rotation: [0, 0, 0.6] },
      { id: 'cg3', name: 'Wrapper Right', initialPos: [6, 0, 0], targetPos: [0.95, -0.35, 0], dimensions: [0.7, 0.45, 0.05], color: '#f472b6', type: 'box', rotation: [0, 0, -0.6] },
      { id: 'cg4', name: 'Stripe A', initialPos: [0, 4, 6], targetPos: [0, -0.2, 0.25], dimensions: [1.05, 0.08, 0.08], color: '#fde047', type: 'box' },
      { id: 'cg5', name: 'Stripe B', initialPos: [0, 5, -6], targetPos: [0, 0.0, -0.25], dimensions: [1.05, 0.08, 0.08], color: '#fde047', type: 'box' },
      { id: 'cg6', name: 'Shine', initialPos: [0, 7, 0], targetPos: [0.45, 0.05, 0.32], dimensions: [0.14, 0, 0], color: '#f8fafc', type: 'sphere' },
      { id: 'cg7', name: 'Mini Candy', initialPos: [-4, 6, 2], targetPos: [-0.45, 0.55, -0.25], dimensions: [0.35, 0.25, 0.25], color: '#60a5fa', type: 'box' },
      { id: 'cg8', name: 'Mini Wrapper', initialPos: [-6, 6, 2], targetPos: [-0.95, 0.55, -0.25], dimensions: [0.3, 0.18, 0.05], color: '#93c5fd', type: 'box', rotation: [0, 0, 0.7] },
    ]
  },
  {
    id: 82,
    title: "Basketball Hoop",
    emoji: "🏀",
    background: "#fff7ed",
    parts: [
      { id: 'bh1', name: 'Backboard', initialPos: [0, 4, -6], targetPos: [0, 0.75, -0.2], dimensions: [1.8, 1.1, 0.08], color: '#f8fafc', type: 'box' },
      { id: 'bh2', name: 'Hoop Ring', initialPos: [0, 2, 6], targetPos: [0, 0.35, 0.55], dimensions: [0.55, 0.55, 0.08], color: '#f97316', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'bh3', name: 'Net', initialPos: [0, -6, 0], targetPos: [0, -0.15, 0.55], dimensions: [0.45, 0.65, 0.45], color: '#e2e8f0', type: 'capsule' },
      { id: 'bh4', name: 'Pole', initialPos: [-6, -6, 0], targetPos: [-0.9, -0.85, 0], dimensions: [0.14, 2.6, 0.14], color: '#334155', type: 'cylinder' },
      { id: 'bh5', name: 'Base', initialPos: [-6, -7, 0], targetPos: [-0.9, -1.7, 0], dimensions: [0.85, 0.2, 0.85], color: '#0f172a', type: 'box' },
      { id: 'bh6', name: 'Ball', initialPos: [6, 0, 0], targetPos: [0.9, -0.15, 0.25], dimensions: [0.18, 0, 0], color: '#f97316', type: 'sphere' },
      { id: 'bh7', name: 'Target Square', initialPos: [4, 4, -6], targetPos: [0, 0.75, -0.15], dimensions: [0.55, 0.35, 0.01], color: '#ef4444', type: 'box' },
      { id: 'bh8', name: 'Support Arm', initialPos: [-2, 0, -6], targetPos: [-0.45, -0.1, 0.2], dimensions: [0.08, 0.08, 1.2], color: '#475569', type: 'cylinder' },
    ]
  },
  {
    id: 83,
    title: "Ancient Scroll",
    emoji: "📜",
    background: "#fffbeb",
    parts: [
      { id: 'as1', name: 'Scroll Sheet', initialPos: [0, -6, 0], targetPos: [0, -0.55, 0], dimensions: [2.3, 0.12, 1.2], color: '#fef3c7', type: 'box' },
      { id: 'as2', name: 'Top Roll', initialPos: [0, 6, 0], targetPos: [0, 0.1, 0], dimensions: [0.18, 0.18, 1.25], color: '#92400e', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'as3', name: 'Bottom Roll', initialPos: [0, -6, 2], targetPos: [0, -1.2, 0], dimensions: [0.18, 0.18, 1.25], color: '#92400e', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'as4', name: 'Seal', initialPos: [6, 0, 0], targetPos: [0.85, -0.85, 0.35], dimensions: [0.2, 0.2, 0.08], color: '#b91c1c', type: 'cylinder' },
      { id: 'as5', name: 'Ink Line A', initialPos: [-4, 3, 4], targetPos: [-0.55, -0.35, 0], dimensions: [1.3, 0.04, 0.04], color: '#1f2937', type: 'box' },
      { id: 'as6', name: 'Ink Line B', initialPos: [4, 3, -4], targetPos: [-0.55, -0.55, 0], dimensions: [1.2, 0.04, 0.04], color: '#1f2937', type: 'box' },
      { id: 'as7', name: 'Ink Line C', initialPos: [-4, 2, -4], targetPos: [-0.55, -0.75, 0], dimensions: [1.1, 0.04, 0.04], color: '#1f2937', type: 'box' },
      { id: 'as8', name: 'Quill', initialPos: [6, 4, 4], targetPos: [0.95, -0.25, -0.45], dimensions: [0.06, 0.06, 1.4], color: '#334155', type: 'cylinder', rotation: [0.2, 0.0, 1.57] },
    ]
  },
  {
    id: 84,
    title: "Bento Box",
    emoji: "🍱",
    background: "#f8fafc",
    parts: [
      { id: 'bbx1', name: 'Box Base', initialPos: [0, -6, 0], targetPos: [0, -1.05, 0], dimensions: [2.2, 0.35, 1.6], color: '#111827', type: 'box' },
      { id: 'bbx2', name: 'Rice', initialPos: [-4, 2, 4], targetPos: [-0.6, -0.7, -0.25], dimensions: [0.8, 0.25, 0.7], color: '#f8fafc', type: 'box' },
      { id: 'bbx3', name: 'Salmon', initialPos: [4, 3, -4], targetPos: [0.65, -0.7, -0.25], dimensions: [0.8, 0.18, 0.7], color: '#fb7185', type: 'box' },
      { id: 'bbx4', name: 'Egg', initialPos: [0, 4, 4], targetPos: [-0.6, -0.7, 0.35], dimensions: [0.7, 0.2, 0.55], color: '#fde68a', type: 'box' },
      { id: 'bbx5', name: 'Pickles', initialPos: [0, 5, -4], targetPos: [0.65, -0.7, 0.35], dimensions: [0.7, 0.18, 0.55], color: '#22c55e', type: 'box' },
      { id: 'bbx6', name: 'Divider', initialPos: [0, 0, 6], targetPos: [0, -0.7, 0.05], dimensions: [0.05, 0.25, 1.5], color: '#334155', type: 'box' },
      { id: 'bbx7', name: 'Chopstick A', initialPos: [-6, 2, 0], targetPos: [0.6, -1.25, 0.7], dimensions: [0.06, 0.06, 2.2], color: '#78350f', type: 'cylinder', rotation: [0, -0.2, 0] },
      { id: 'bbx8', name: 'Chopstick B', initialPos: [-6, 2, 2], targetPos: [0.6, -1.25, 0.85], dimensions: [0.06, 0.06, 2.2], color: '#78350f', type: 'cylinder', rotation: [0, -0.25, 0] },
      { id: 'bbx9', name: 'Sesame', initialPos: [6, 6, 0], targetPos: [-0.25, -0.55, -0.15], dimensions: [0.06, 0, 0], color: '#111827', type: 'sphere' },
    ]
  },
  {
    id: 85,
    title: "Moon Rover",
    emoji: "🛞",
    background: "#0f172a",
    parts: [
      { id: 'mr1', name: 'Chassis', initialPos: [0, -6, 0], targetPos: [0, -0.8, 0], dimensions: [2.0, 0.35, 1.2], color: '#94a3b8', type: 'box' },
      { id: 'mr2', name: 'Camera Mast', initialPos: [0, 6, 0], targetPos: [0.55, -0.05, 0.25], dimensions: [0.08, 0.8, 0.08], color: '#cbd5e1', type: 'cylinder' },
      { id: 'mr3', name: 'Camera', initialPos: [2, 6, 4], targetPos: [0.75, 0.35, 0.25], dimensions: [0.2, 0.18, 0.2], color: '#0ea5e9', type: 'box' },
      { id: 'mr4', name: 'Solar Panel', initialPos: [-6, 2, 0], targetPos: [-0.55, -0.15, 0], dimensions: [1.1, 0.08, 0.7], color: '#2563eb', type: 'box', rotation: [0, 0, 0.15] },
      { id: 'mr5', name: 'Wheel Front Left', initialPos: [6, -6, 3], targetPos: [0.85, -1.15, 0.55], dimensions: [0.35, 0.35, 0.2], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'mr6', name: 'Wheel Front Right', initialPos: [6, -6, -3], targetPos: [0.85, -1.15, -0.55], dimensions: [0.35, 0.35, 0.2], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'mr7', name: 'Wheel Back Left', initialPos: [-6, -6, 3], targetPos: [-0.85, -1.15, 0.55], dimensions: [0.35, 0.35, 0.2], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'mr8', name: 'Wheel Back Right', initialPos: [-6, -6, -3], targetPos: [-0.85, -1.15, -0.55], dimensions: [0.35, 0.35, 0.2], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'mr9', name: 'Antenna', initialPos: [4, 6, -4], targetPos: [-0.15, 0.35, -0.35], dimensions: [0.05, 0.9, 0.05], color: '#facc15', type: 'cylinder', rotation: [0, 0, 0.3] },
    ]
  },
  {
    id: 86,
    title: "Coral Reef",
    emoji: "🪸",
    background: "#ecfeff",
    parts: [
      { id: 'crf1', name: 'Seabed', initialPos: [0, -7, 0], targetPos: [0, -1.55, 0], dimensions: [2.8, 0.35, 2.2], color: '#fcd34d', type: 'box' },
      { id: 'crf2', name: 'Coral A', initialPos: [-6, -1, 2], targetPos: [-0.85, -0.75, 0.35], dimensions: [0.25, 1.2, 0.25], color: '#fb7185', type: 'capsule' },
      { id: 'crf3', name: 'Coral B', initialPos: [6, -1, -2], targetPos: [0.65, -0.8, -0.25], dimensions: [0.25, 1.0, 0.25], color: '#a78bfa', type: 'capsule' },
      { id: 'crf4', name: 'Coral C', initialPos: [-4, 0, -4], targetPos: [-0.15, -0.85, -0.55], dimensions: [0.22, 0.9, 0.22], color: '#34d399', type: 'capsule' },
      { id: 'crf5', name: 'Fish', initialPos: [0, 6, 0], targetPos: [0.85, 0.05, 0.55], dimensions: [0.22, 0.12, 0.12], color: '#60a5fa', type: 'box' },
      { id: 'crf6', name: 'Bubble A', initialPos: [2, 7, 2], targetPos: [0.55, 0.75, 0.35], dimensions: [0.12, 0, 0], color: '#e0f2fe', type: 'sphere' },
      { id: 'crf7', name: 'Bubble B', initialPos: [-2, 7, -2], targetPos: [0.35, 1.05, 0.15], dimensions: [0.1, 0, 0], color: '#e0f2fe', type: 'sphere' },
      { id: 'crf8', name: 'Starfish', initialPos: [0, -2, 6], targetPos: [-0.75, -1.35, -0.65], dimensions: [0.18, 0, 0], color: '#f97316', type: 'sphere' },
    ]
  },
  {
    id: 87,
    title: "Friendly Octopus",
    emoji: "🐙",
    background: "#fdf4ff",
    parts: [
      { id: 'fo1', name: 'Head', initialPos: [0, 6, 0], targetPos: [0, 0.55, 0], dimensions: [0.85, 0, 0], color: '#a78bfa', type: 'sphere' },
      { id: 'fo2', name: 'Body', initialPos: [0, -6, 0], targetPos: [0, -0.25, 0], dimensions: [1.1, 0.9, 1.1], color: '#8b5cf6', type: 'box' },
      { id: 'fo3', name: 'Tentacle A', initialPos: [-6, -3, 2], targetPos: [-0.75, -1.05, 0.45], dimensions: [0.18, 0.18, 1.4], color: '#a78bfa', type: 'cylinder', rotation: [0.2, 0.0, 1.57] },
      { id: 'fo4', name: 'Tentacle B', initialPos: [-6, -3, -2], targetPos: [-0.75, -1.05, -0.45], dimensions: [0.18, 0.18, 1.4], color: '#a78bfa', type: 'cylinder', rotation: [-0.2, 0.0, 1.57] },
      { id: 'fo5', name: 'Tentacle C', initialPos: [6, -3, 2], targetPos: [0.75, -1.05, 0.45], dimensions: [0.18, 0.18, 1.4], color: '#a78bfa', type: 'cylinder', rotation: [0.2, 0.0, 1.57] },
      { id: 'fo6', name: 'Tentacle D', initialPos: [6, -3, -2], targetPos: [0.75, -1.05, -0.45], dimensions: [0.18, 0.18, 1.4], color: '#a78bfa', type: 'cylinder', rotation: [-0.2, 0.0, 1.57] },
      { id: 'fo7', name: 'Eye Left', initialPos: [-2, 4, 4], targetPos: [-0.25, 0.6, 0.65], dimensions: [0.1, 0, 0], color: '#111827', type: 'sphere' },
      { id: 'fo8', name: 'Eye Right', initialPos: [2, 4, -4], targetPos: [0.25, 0.6, 0.65], dimensions: [0.1, 0, 0], color: '#111827', type: 'sphere' },
      { id: 'fo9', name: 'Blush', initialPos: [0, 4, 6], targetPos: [0, 0.35, 0.75], dimensions: [0.12, 0, 0], color: '#fb7185', type: 'sphere' },
    ]
  },
  {
    id: 88,
    title: "Camping Lantern",
    emoji: "🏮",
    background: "#0b1324",
    parts: [
      { id: 'cl1', name: 'Lantern Body', initialPos: [0, -6, 0], targetPos: [0, -0.35, 0], dimensions: [0.85, 1.1, 0.85], color: '#ef4444', type: 'box' },
      { id: 'cl2', name: 'Glass', initialPos: [0, 0, 6], targetPos: [0, -0.35, 0.45], dimensions: [0.65, 0.85, 0.08], color: '#fde047', type: 'box' },
      { id: 'cl3', name: 'Top Cap', initialPos: [0, 6, 0], targetPos: [0, 0.35, 0], dimensions: [0.95, 0.2, 0.95], color: '#0f172a', type: 'box' },
      { id: 'cl4', name: 'Bottom Cap', initialPos: [0, -7, 2], targetPos: [0, -1.05, 0], dimensions: [0.95, 0.2, 0.95], color: '#0f172a', type: 'box' },
      { id: 'cl5', name: 'Handle', initialPos: [-4, 7, 0], targetPos: [0, 0.75, 0], dimensions: [0.05, 0.95, 0.05], color: '#94a3b8', type: 'cylinder' },
      { id: 'cl6', name: 'Handle Bar', initialPos: [4, 7, 0], targetPos: [0, 1.05, 0], dimensions: [0.05, 0.05, 0.95], color: '#94a3b8', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'cl7', name: 'Light Core', initialPos: [0, 5, 5], targetPos: [0, -0.1, 0.3], dimensions: [0.14, 0, 0], color: '#fde047', type: 'sphere' },
      { id: 'cl8', name: 'Switch', initialPos: [4, 0, -6], targetPos: [0.35, 0.05, -0.45], dimensions: [0.2, 0.12, 0.12], color: '#334155', type: 'box' },
    ]
  },
  {
    id: 89,
    title: "Concert Violin",
    emoji: "🎻",
    background: "#fff7ed",
    parts: [
      { id: 'cv1', name: 'Body', initialPos: [0, -6, 0], targetPos: [0, -0.65, 0], dimensions: [1.2, 1.5, 0.25], color: '#92400e', type: 'box' },
      { id: 'cv2', name: 'Neck', initialPos: [0, 6, 0], targetPos: [0, 0.6, 0], dimensions: [0.18, 1.6, 0.18], color: '#78350f', type: 'box' },
      { id: 'cv3', name: 'Headstock', initialPos: [0, 7, 3], targetPos: [0, 1.55, 0], dimensions: [0.35, 0.55, 0.2], color: '#78350f', type: 'box' },
      { id: 'cv4', name: 'Bridge', initialPos: [4, -2, 6], targetPos: [0, -0.25, 0.12], dimensions: [0.35, 0.2, 0.05], color: '#fef3c7', type: 'box' },
      { id: 'cv5', name: 'String A', initialPos: [-4, 2, 6], targetPos: [-0.06, 0.45, 0.13], dimensions: [0.02, 2.0, 0.01], color: '#e2e8f0', type: 'box' },
      { id: 'cv6', name: 'String B', initialPos: [-4, 1, -6], targetPos: [0.06, 0.45, 0.13], dimensions: [0.02, 2.0, 0.01], color: '#e2e8f0', type: 'box' },
      { id: 'cv7', name: 'Bow Stick', initialPos: [6, 0, 0], targetPos: [0.95, -0.15, 0], dimensions: [0.05, 0.05, 2.4], color: '#78350f', type: 'cylinder' },
      { id: 'cv8', name: 'Bow Hair', initialPos: [6, 1, 2], targetPos: [0.85, -0.15, 0], dimensions: [0.02, 0.02, 2.2], color: '#f8fafc', type: 'cylinder' },
    ]
  },
  {
    id: 90,
    title: "Book Stack",
    emoji: "📚",
    background: "#f8fafc",
    parts: [
      { id: 'bs1', name: 'Book Bottom', initialPos: [0, -6, 0], targetPos: [0, -1.2, 0], dimensions: [2.2, 0.35, 1.4], color: '#3b82f6', type: 'box' },
      { id: 'bs2', name: 'Book Middle', initialPos: [-6, -2, 2], targetPos: [0, -0.75, 0], dimensions: [2.1, 0.35, 1.35], color: '#ef4444', type: 'box', rotation: [0, 0.12, 0] },
      { id: 'bs3', name: 'Book Top', initialPos: [6, 2, -2], targetPos: [0, -0.3, 0], dimensions: [2.0, 0.35, 1.3], color: '#22c55e', type: 'box', rotation: [0, -0.12, 0] },
      { id: 'bs4', name: 'Bookmark', initialPos: [0, 6, 4], targetPos: [0.55, -0.15, 0.35], dimensions: [0.12, 0.65, 0.02], color: '#facc15', type: 'box' },
      { id: 'bs5', name: 'Spine Label', initialPos: [-4, 3, -6], targetPos: [-1.0, -0.75, 0.68], dimensions: [0.55, 0.25, 0.02], color: '#f8fafc', type: 'box' },
      { id: 'bs6', name: 'Spine Label 2', initialPos: [4, 3, -6], targetPos: [-1.0, -1.2, 0.68], dimensions: [0.55, 0.25, 0.02], color: '#f8fafc', type: 'box' },
      { id: 'bs7', name: 'Star Sticker', initialPos: [0, 7, 0], targetPos: [0.65, -0.3, 0.68], dimensions: [0.12, 0, 0], color: '#fde047', type: 'sphere' },
    ]
  },
  {
    id: 91,
    title: "Phoenix Flame",
    emoji: "🔥",
    background: "#020617",
    parts: [
      { id: 'pf1', name: 'Body', initialPos: [0, -6, 0], targetPos: [0, -0.5, 0], dimensions: [1.0, 0.9, 0.8], color: '#f97316', type: 'box' },
      { id: 'pf2', name: 'Head', initialPos: [4, 4, 0], targetPos: [0.75, 0.3, 0.45], dimensions: [0.35, 0.3, 0.35], color: '#fb7185', type: 'box' },
      { id: 'pf3', name: 'Wing Left', initialPos: [-6, 3, 2], targetPos: [-0.65, 0.05, 0], dimensions: [1.2, 0.35, 0.08], color: '#f59e0b', type: 'box', rotation: [0.2, 0, 0.8] },
      { id: 'pf4', name: 'Wing Right', initialPos: [-6, 3, -2], targetPos: [-0.65, 0.05, 0], dimensions: [1.2, 0.35, 0.08], color: '#f59e0b', type: 'box', rotation: [-0.2, 0, 0.8] },
      { id: 'pf5', name: 'Tail Flame A', initialPos: [6, -1, 0], targetPos: [-0.85, -0.85, -0.35], dimensions: [0.28, 0, 0], color: '#fb7185', type: 'sphere' },
      { id: 'pf6', name: 'Tail Flame B', initialPos: [6, 1, 2], targetPos: [-1.05, -0.55, -0.55], dimensions: [0.22, 0, 0], color: '#f97316', type: 'sphere' },
      { id: 'pf7', name: 'Crest', initialPos: [0, 7, 0], targetPos: [0.95, 0.65, 0.65], dimensions: [0.18, 0, 0], color: '#fde047', type: 'sphere' },
      { id: 'pf8', name: 'Beak', initialPos: [6, 4, 2], targetPos: [1.05, 0.25, 0.75], dimensions: [0.18, 0.12, 0.12], color: '#facc15', type: 'box' },
    ]
  },
  {
    id: 92,
    title: "Samurai Blade",
    emoji: "🗡️",
    background: "#f1f5f9",
    parts: [
      { id: 'sbld1', name: 'Blade', initialPos: [0, 6, 0], targetPos: [0, 0.35, 0], dimensions: [0.2, 2.2, 0.06], color: '#cbd5e1', type: 'box' },
      { id: 'sbld2', name: 'Tip', initialPos: [0, 7, 2], targetPos: [0, 1.55, 0], dimensions: [0.18, 0, 0], color: '#e2e8f0', type: 'sphere' },
      { id: 'sbld3', name: 'Guard', initialPos: [-4, -1, 0], targetPos: [0, -0.75, 0], dimensions: [0.9, 0.12, 0.5], color: '#facc15', type: 'box' },
      { id: 'sbld4', name: 'Handle', initialPos: [0, -6, 0], targetPos: [0, -1.35, 0], dimensions: [0.18, 0.7, 0.18], color: '#111827', type: 'cylinder' },
      { id: 'sbld5', name: 'Pommel', initialPos: [0, -7, 2], targetPos: [0, -1.75, 0], dimensions: [0.18, 0, 0], color: '#334155', type: 'sphere' },
      { id: 'sbld6', name: 'Wrap A', initialPos: [4, -4, 4], targetPos: [0, -1.15, 0.12], dimensions: [0.22, 0.06, 0.06], color: '#ef4444', type: 'box' },
      { id: 'sbld7', name: 'Wrap B', initialPos: [-4, -4, -4], targetPos: [0, -1.35, -0.12], dimensions: [0.22, 0.06, 0.06], color: '#ef4444', type: 'box' },
    ]
  },
  {
    id: 93,
    title: "Tea Kettle",
    emoji: "🫖",
    background: "#fff7ed",
    parts: [
      { id: 'tk1', name: 'Kettle Body', initialPos: [0, -6, 0], targetPos: [0, -0.55, 0], dimensions: [1.0, 0, 0], color: '#60a5fa', type: 'sphere' },
      { id: 'tk2', name: 'Base Ring', initialPos: [0, -6, 2], targetPos: [0, -1.15, 0], dimensions: [1.05, 0.2, 1.05], color: '#334155', type: 'box' },
      { id: 'tk3', name: 'Lid', initialPos: [0, 6, 0], targetPos: [0, 0.25, 0], dimensions: [0.65, 0.2, 0.65], color: '#3b82f6', type: 'box' },
      { id: 'tk4', name: 'Knob', initialPos: [0, 7, 2], targetPos: [0, 0.45, 0], dimensions: [0.12, 0, 0], color: '#fbbf24', type: 'sphere' },
      { id: 'tk5', name: 'Spout', initialPos: [6, 0, 0], targetPos: [0.95, -0.35, 0], dimensions: [0.45, 0.2, 0.25], color: '#3b82f6', type: 'box', rotation: [0, 0.1, 0] },
      { id: 'tk6', name: 'Handle', initialPos: [-6, 0, 0], targetPos: [-0.95, -0.35, 0], dimensions: [0.14, 0.14, 1.2], color: '#111827', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'tk7', name: 'Steam A', initialPos: [2, 7, 0], targetPos: [0.25, 0.85, 0], dimensions: [0.18, 0, 0], color: '#e2e8f0', type: 'sphere' },
      { id: 'tk8', name: 'Steam B', initialPos: [-2, 7, 0], targetPos: [-0.15, 1.15, 0.15], dimensions: [0.14, 0, 0], color: '#e2e8f0', type: 'sphere' },
    ]
  },
  {
    id: 94,
    title: "Star Telescope",
    emoji: "🔭",
    background: "#0f172a",
    parts: [
      { id: 'st1', name: 'Tube', initialPos: [0, 0, -6], targetPos: [0, 0.25, 0], dimensions: [0.35, 0.35, 2.0], color: '#94a3b8', type: 'cylinder', rotation: [0.2, 0.0, 0.6] },
      { id: 'st2', name: 'Lens', initialPos: [6, 2, 0], targetPos: [0.75, 0.65, 0.55], dimensions: [0.22, 0, 0], color: '#38bdf8', type: 'sphere' },
      { id: 'st3', name: 'Eyepiece', initialPos: [-6, 2, 0], targetPos: [-0.75, -0.05, -0.55], dimensions: [0.2, 0.2, 0.25], color: '#334155', type: 'box' },
      { id: 'st4', name: 'Tripod Leg A', initialPos: [-6, -6, 2], targetPos: [-0.25, -1.25, 0.35], dimensions: [0.08, 1.4, 0.08], color: '#64748b', type: 'cylinder', rotation: [0.0, 0.0, 0.25] },
      { id: 'st5', name: 'Tripod Leg B', initialPos: [6, -6, 2], targetPos: [0.25, -1.25, 0.35], dimensions: [0.08, 1.4, 0.08], color: '#64748b', type: 'cylinder', rotation: [0.0, 0.0, -0.25] },
      { id: 'st6', name: 'Tripod Leg C', initialPos: [0, -6, -6], targetPos: [0.0, -1.25, -0.35], dimensions: [0.08, 1.4, 0.08], color: '#64748b', type: 'cylinder' },
      { id: 'st7', name: 'Mount', initialPos: [0, -2, 6], targetPos: [0, -0.65, 0], dimensions: [0.25, 0.25, 0.25], color: '#0f172a', type: 'box' },
      { id: 'st8', name: 'Star', initialPos: [0, 7, 0], targetPos: [1.15, 1.05, 0.75], dimensions: [0.12, 0, 0], color: '#fde047', type: 'sphere' },
    ]
  },
  {
    id: 95,
    title: "Christmas Tree",
    emoji: "🎄",
    background: "#f0fdf4",
    parts: [
      { id: 'xt1', name: 'Tree Base', initialPos: [0, -7, 0], targetPos: [0, -1.55, 0], dimensions: [0.7, 0.35, 0.7], color: '#78350f', type: 'cylinder' },
      { id: 'xt2', name: 'Layer Bottom', initialPos: [0, -2, 6], targetPos: [0, -0.85, 0], dimensions: [2.0, 0.45, 1.6], color: '#16a34a', type: 'box' },
      { id: 'xt3', name: 'Layer Mid', initialPos: [-6, 0, 0], targetPos: [0, -0.25, 0], dimensions: [1.6, 0.45, 1.2], color: '#22c55e', type: 'box' },
      { id: 'xt4', name: 'Layer Top', initialPos: [6, 2, 0], targetPos: [0, 0.35, 0], dimensions: [1.2, 0.45, 0.85], color: '#16a34a', type: 'box' },
      { id: 'xt5', name: 'Star Top', initialPos: [0, 7, 0], targetPos: [0, 1.15, 0], dimensions: [0.16, 0, 0], color: '#fde047', type: 'sphere' },
      { id: 'xt6', name: 'Ornament Red', initialPos: [-4, 4, 2], targetPos: [-0.45, -0.15, 0.25], dimensions: [0.12, 0, 0], color: '#ef4444', type: 'sphere' },
      { id: 'xt7', name: 'Ornament Blue', initialPos: [4, 4, -2], targetPos: [0.45, -0.45, -0.2], dimensions: [0.12, 0, 0], color: '#60a5fa', type: 'sphere' },
      { id: 'xt8', name: 'Ornament Gold', initialPos: [0, 5, -4], targetPos: [0.15, 0.05, -0.25], dimensions: [0.12, 0, 0], color: '#facc15', type: 'sphere' },
    ]
  },
  {
    id: 96,
    title: "Arcade Cabinet",
    emoji: "🕹️",
    background: "#0f172a",
    parts: [
      { id: 'acb1', name: 'Cabinet Body', initialPos: [0, -6, 0], targetPos: [0, -0.6, 0], dimensions: [1.2, 2.1, 0.9], color: '#334155', type: 'box' },
      { id: 'acb2', name: 'Screen', initialPos: [0, 0, 6], targetPos: [0, 0.55, 0.46], dimensions: [0.9, 0.65, 0.08], color: '#22c55e', type: 'box' },
      { id: 'acb3', name: 'Marquee', initialPos: [0, 7, 0], targetPos: [0, 1.25, 0.46], dimensions: [1.0, 0.3, 0.08], color: '#f97316', type: 'box' },
      { id: 'acb4', name: 'Joystick', initialPos: [-6, 0, 0], targetPos: [-0.35, -0.45, 0.46], dimensions: [0.06, 0.6, 0.06], color: '#94a3b8', type: 'cylinder' },
      { id: 'acb5', name: 'Joystick Ball', initialPos: [-6, 2, 0], targetPos: [-0.35, -0.05, 0.46], dimensions: [0.1, 0, 0], color: '#ef4444', type: 'sphere' },
      { id: 'acb6', name: 'Button A', initialPos: [6, 0, 0], targetPos: [0.25, -0.55, 0.46], dimensions: [0.08, 0, 0], color: '#60a5fa', type: 'sphere' },
      { id: 'acb7', name: 'Button B', initialPos: [6, 1, 0], targetPos: [0.45, -0.55, 0.46], dimensions: [0.08, 0, 0], color: '#fde047', type: 'sphere' },
      { id: 'acb8', name: 'Coin Slot', initialPos: [0, -2, 6], targetPos: [0, -0.95, 0.46], dimensions: [0.25, 0.12, 0.05], color: '#111827', type: 'box' },
    ]
  },
  {
    id: 97,
    title: "Mountain Bike",
    emoji: "🚵",
    background: "#f0fdf4",
    parts: [
      { id: 'mb1', name: 'Frame Bar', initialPos: [0, 0, 6], targetPos: [0, 0, 0], dimensions: [2.0, 0.08, 0.08], color: '#ef4444', type: 'box' },
      { id: 'mb2', name: 'Seat Post', initialPos: [-2, 6, 0], targetPos: [-0.6, 0.45, 0], dimensions: [0.08, 0.9, 0.08], color: '#ef4444', type: 'box', rotation: [0, 0, -0.25] },
      { id: 'mb3', name: 'Handle Post', initialPos: [2, 6, 0], targetPos: [0.6, 0.45, 0], dimensions: [0.08, 0.9, 0.08], color: '#ef4444', type: 'box', rotation: [0, 0, 0.25] },
      { id: 'mb4', name: 'Wheel Front', initialPos: [6, -6, 0], targetPos: [1.2, -0.55, 0], dimensions: [0.95, 0.95, 0.08], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'mb5', name: 'Wheel Back', initialPos: [-6, -6, 0], targetPos: [-1.2, -0.55, 0], dimensions: [0.95, 0.95, 0.08], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'mb6', name: 'Seat', initialPos: [-2, 7, 2], targetPos: [-0.75, 0.85, 0], dimensions: [0.45, 0.12, 0.35], color: '#0f172a', type: 'box' },
      { id: 'mb7', name: 'Handlebar', initialPos: [2, 7, 2], targetPos: [0.75, 0.85, 0], dimensions: [0.05, 0.05, 1.2], color: '#94a3b8', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'mb8', name: 'Chainring', initialPos: [0, -2, 6], targetPos: [0, -0.55, 0], dimensions: [0.22, 0.22, 0.05], color: '#facc15', type: 'cylinder', rotation: [1.57, 0, 0] },
    ]
  },
  {
    id: 98,
    title: "Golden Trophy",
    emoji: "🏆",
    background: "#fffbeb",
    parts: [
      { id: 'gt1', name: 'Base', initialPos: [0, -7, 0], targetPos: [0, -1.55, 0], dimensions: [1.2, 0.35, 1.2], color: '#0f172a', type: 'box' },
      { id: 'gt2', name: 'Stem', initialPos: [0, -2, 6], targetPos: [0, -0.95, 0], dimensions: [0.22, 0.8, 0.22], color: '#facc15', type: 'cylinder' },
      { id: 'gt3', name: 'Cup', initialPos: [0, 4, 0], targetPos: [0, -0.15, 0], dimensions: [0.9, 0, 0], color: '#fde047', type: 'sphere' },
      { id: 'gt4', name: 'Rim', initialPos: [0, 6, 0], targetPos: [0, 0.25, 0], dimensions: [1.0, 0.18, 1.0], color: '#facc15', type: 'box' },
      { id: 'gt5', name: 'Handle Left', initialPos: [-6, 2, 0], targetPos: [-0.95, 0.0, 0], dimensions: [0.1, 0.1, 1.0], color: '#facc15', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'gt6', name: 'Handle Right', initialPos: [6, 2, 0], targetPos: [0.95, 0.0, 0], dimensions: [0.1, 0.1, 1.0], color: '#facc15', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'gt7', name: 'Star', initialPos: [0, 7, 2], targetPos: [0, 0.65, 0.55], dimensions: [0.14, 0, 0], color: '#fde047', type: 'sphere' },
    ]
  },
  {
    id: 99,
    title: "City Taxi",
    emoji: "🚕",
    background: "#fffbeb",
    parts: [
      { id: 'tx1', name: 'Chassis', initialPos: [0, -6, 0], targetPos: [0, -0.85, 0], dimensions: [2.6, 0.55, 1.2], color: '#facc15', type: 'box' },
      { id: 'tx2', name: 'Cabin', initialPos: [0, 2, -6], targetPos: [-0.2, -0.25, 0], dimensions: [1.6, 0.55, 1.1], color: '#fde047', type: 'box' },
      { id: 'tx3', name: 'Windshield', initialPos: [6, 0, 0], targetPos: [1.15, -0.15, 0], dimensions: [0.05, 0.4, 0.9], color: '#38bdf8', type: 'box' },
      { id: 'tx4', name: 'Taxi Sign', initialPos: [0, 7, 0], targetPos: [0.35, 0.25, 0], dimensions: [0.35, 0.18, 0.25], color: '#111827', type: 'box' },
      { id: 'tx5', name: 'Wheel FL', initialPos: [6, -6, 3], targetPos: [1.1, -1.15, 0.55], dimensions: [0.35, 0.35, 0.18], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'tx6', name: 'Wheel FR', initialPos: [6, -6, -3], targetPos: [1.1, -1.15, -0.55], dimensions: [0.35, 0.35, 0.18], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'tx7', name: 'Wheel BL', initialPos: [-6, -6, 3], targetPos: [-1.1, -1.15, 0.55], dimensions: [0.35, 0.35, 0.18], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'tx8', name: 'Wheel BR', initialPos: [-6, -6, -3], targetPos: [-1.1, -1.15, -0.55], dimensions: [0.35, 0.35, 0.18], color: '#111827', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'tx9', name: 'Headlight', initialPos: [6, 2, 2], targetPos: [1.25, -0.65, 0.35], dimensions: [0.12, 0, 0], color: '#fde047', type: 'sphere' },
    ]
  },
  {
    id: 100,
    title: "Final Boss Mecha",
    emoji: "🦾",
    background: "#020617",
    parts: [
      { id: 'fm1', name: 'Torso', initialPos: [0, -6, 0], targetPos: [0, -0.2, 0], dimensions: [1.2, 1.4, 0.8], color: '#475569', type: 'box' },
      { id: 'fm2', name: 'Core', initialPos: [0, 0, 6], targetPos: [0, -0.1, 0.45], dimensions: [0.18, 0, 0], color: '#22c55e', type: 'sphere' },
      { id: 'fm3', name: 'Head', initialPos: [0, 6, 0], targetPos: [0, 0.95, 0], dimensions: [0.55, 0.45, 0.45], color: '#94a3b8', type: 'box' },
      { id: 'fm4', name: 'Arm Left', initialPos: [-6, 0, 0], targetPos: [-1.05, -0.1, 0], dimensions: [0.25, 1.1, 0.25], color: '#64748b', type: 'box', rotation: [0, 0, 0.15] },
      { id: 'fm5', name: 'Arm Right', initialPos: [6, 0, 0], targetPos: [1.05, -0.1, 0], dimensions: [0.25, 1.1, 0.25], color: '#64748b', type: 'box', rotation: [0, 0, -0.15] },
      { id: 'fm6', name: 'Leg Left', initialPos: [-3, -6, 0], targetPos: [-0.35, -1.25, 0], dimensions: [0.3, 0.9, 0.3], color: '#334155', type: 'box' },
      { id: 'fm7', name: 'Leg Right', initialPos: [3, -6, 0], targetPos: [0.35, -1.25, 0], dimensions: [0.3, 0.9, 0.3], color: '#334155', type: 'box' },
      { id: 'fm8', name: 'Shoulder Cannon', initialPos: [4, 6, -4], targetPos: [0.75, 0.75, -0.25], dimensions: [0.22, 0.22, 0.8], color: '#111827', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'fm9', name: 'Cannon Glow', initialPos: [6, 6, -4], targetPos: [0.75, 0.75, 0.25], dimensions: [0.12, 0, 0], color: '#f97316', type: 'sphere' },
      { id: 'fm10', name: 'Crown Antenna', initialPos: [0, 8, 0], targetPos: [0, 1.35, 0], dimensions: [0.06, 0.6, 0.06], color: '#facc15', type: 'cylinder' },
    ]
  },
  {
    id: 101,
    title: "Jet Fighter",
    emoji: "✈️",
    background: "#0f172a",
    parts: [
      { id: 'jf1', name: 'Fuselage Main', initialPos: [0, -2, -6], targetPos: [0, 0, 0], dimensions: [0.8, 0.6, 2.5], color: '#94a3b8', type: 'box' },
      { id: 'jf2', name: 'Nose Cone', initialPos: [0, 6, 0], targetPos: [0, 0, 1.5], dimensions: [0.5, 0.05, 0.8], color: '#64748b', type: 'box' }, // Tapered look via scale if possible, otherwise box
      { id: 'jf3', name: 'Cockpit Canopy', initialPos: [0, 4, 4], targetPos: [0, 0.4, 0.5], dimensions: [0.5, 0.4, 0.8], color: '#38bdf8', type: 'capsule' },
      { id: 'jf4', name: 'Wing Left', initialPos: [-6, 0, 0], targetPos: [-1.2, 0, -0.5], dimensions: [2.0, 0.1, 1.5], color: '#64748b', type: 'box', rotation: [0, -0.5, 0] }, // Swept back
      { id: 'jf5', name: 'Wing Right', initialPos: [6, 0, 0], targetPos: [1.2, 0, -0.5], dimensions: [2.0, 0.1, 1.5], color: '#64748b', type: 'box', rotation: [0, 0.5, 0] }, // Swept back
      { id: 'jf6', name: 'Tail Fin Left', initialPos: [-3, 6, -3], targetPos: [-0.6, 0.6, -1.2], dimensions: [0.1, 0.8, 0.6], color: '#475569', type: 'box', rotation: [0, 0, -0.3] },
      { id: 'jf7', name: 'Tail Fin Right', initialPos: [3, 6, -3], targetPos: [0.6, 0.6, -1.2], dimensions: [0.1, 0.8, 0.6], color: '#475569', type: 'box', rotation: [0, 0, 0.3] },
      { id: 'jf8', name: 'Engine Left', initialPos: [-2, -6, 2], targetPos: [-0.6, -0.1, -1.2], dimensions: [0.4, 0.4, 1.0], color: '#334155', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'jf9', name: 'Engine Right', initialPos: [2, -6, 2], targetPos: [0.6, -0.1, -1.2], dimensions: [0.4, 0.4, 1.0], color: '#334155', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'jf10', name: 'Afterburner Left', initialPos: [-2, -6, -4], targetPos: [-0.6, -0.1, -1.75], dimensions: [0.3, 0.3, 0.1], color: '#f97316', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'jf11', name: 'Afterburner Right', initialPos: [2, -6, -4], targetPos: [0.6, -0.1, -1.75], dimensions: [0.3, 0.3, 0.1], color: '#f97316', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'jf12', name: 'Missile Left', initialPos: [-6, 3, 0], targetPos: [-2.2, -0.1, -0.5], dimensions: [0.15, 0.15, 1.2], color: '#e2e8f0', type: 'cylinder', rotation: [1.57, 0, 0] },
      { id: 'jf13', name: 'Missile Right', initialPos: [6, 3, 0], targetPos: [2.2, -0.1, -0.5], dimensions: [0.15, 0.15, 1.2], color: '#e2e8f0', type: 'cylinder', rotation: [1.57, 0, 0] },
    ]
  },
  {
    id: 102,
    title: "Monster Truck",
    emoji: "🚙",
    background: "#0f172a",
    parts: [
      { id: 'mt1', name: 'Chassis Frame', initialPos: [0, -6, 0], targetPos: [0, -1.2, 0], dimensions: [1.8, 0.4, 2.8], color: '#1a1a1a', type: 'box' },
      { id: 'mt2', name: 'Body Main', initialPos: [0, 6, 4], targetPos: [0, 0.5, 0.2], dimensions: [1.6, 0.9, 3.2], color: '#ea580c', type: 'box' },
      { id: 'mt3', name: 'Cabin Roof', initialPos: [0, 6, -4], targetPos: [0, 1.3, -0.4], dimensions: [1.4, 0.7, 1.4], color: '#ea580c', type: 'box' },
      { id: 'mt4', name: 'Wheel FL', initialPos: [5, -4, 4], targetPos: [1.4, -1.2, 1.4], dimensions: [0.8, 1.2, 0.8], color: '#1a1a1a', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'mt5', name: 'Wheel FR', initialPos: [-5, -4, 4], targetPos: [-1.4, -1.2, 1.4], dimensions: [0.8, 1.2, 0.8], color: '#1a1a1a', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'mt6', name: 'Wheel BL', initialPos: [5, -4, -4], targetPos: [1.4, -1.2, -1.4], dimensions: [0.8, 1.2, 0.8], color: '#1a1a1a', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'mt7', name: 'Wheel BR', initialPos: [-5, -4, -4], targetPos: [-1.4, -1.2, -1.4], dimensions: [0.8, 1.2, 0.8], color: '#1a1a1a', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'mt8', name: 'Rim FL', initialPos: [7, -4, 4], targetPos: [1.9, -1.2, 1.4], dimensions: [0.4, 0.2, 0.4], color: '#facc15', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'mt9', name: 'Rim FR', initialPos: [-7, -4, 4], targetPos: [-1.9, -1.2, 1.4], dimensions: [0.4, 0.2, 0.4], color: '#facc15', type: 'cylinder', rotation: [0, 0, 1.57] },
      { id: 'mt10', name: 'Suspension Front', initialPos: [0, -2, 4], targetPos: [0, -0.6, 1.4], dimensions: [1.0, 0.6, 0.2], color: '#be185d', type: 'box' },
      { id: 'mt11', name: 'Suspension Back', initialPos: [0, -2, -4], targetPos: [0, -0.6, -1.4], dimensions: [1.0, 0.6, 0.2], color: '#be185d', type: 'box' },
      { id: 'mt12', name: 'Roof Rack', initialPos: [0, 8, 0], targetPos: [0, 1.7, -0.2], dimensions: [1.2, 0.1, 0.8], color: '#0f172a', type: 'box' },
      { id: 'mt13', name: 'Light Bar', initialPos: [0, 9, 2], targetPos: [0, 1.85, 0.3], dimensions: [1.0, 0.15, 0.15], color: '#facc15', type: 'box' },
      { id: 'mt14', name: 'Front Grille', initialPos: [0, 2, 6], targetPos: [0, 0.4, 1.85], dimensions: [1.2, 0.6, 0.1], color: '#cbd5e1', type: 'box' },
    ]
  },
  {
    id: 103,
    title: "The Pink Horse",
    emoji: "🐎",
    background: "#ffedf9",
    parts: [
      { id: 'h1', name: 'Head', initialPos: [-3, 2, 0], targetPos: [1.5, 0.8, 0], dimensions: [0.6, 0.8, 0.4], color: '#ff69b4', type: 'box' },
      { id: 'h2', name: 'Neck', initialPos: [2, 3, 1], targetPos: [1, 0.3, 0], dimensions: [0.4, 0.7, 0.4], color: '#ff69b4', type: 'box' },
      { id: 'h3', name: 'Chest', initialPos: [-2, -2, -1], targetPos: [0.3, 0, 0], dimensions: [0.8, 0.8, 0.5], color: '#ff69b4', type: 'box' },
      { id: 'h4', name: 'Back Left', initialPos: [3, -1, 2], targetPos: [-0.6, 0, 0], dimensions: [1, 0.8, 0.5], color: '#ff69b4', type: 'box' },
      { id: 'h5', name: 'Tail Section', initialPos: [0, 4, -2], targetPos: [-1.4, 0.2, 0], dimensions: [0.6, 0.6, 0.4], color: '#ff69b4', type: 'box' },
      { id: 'h6', name: 'Leg Front Left', initialPos: [4, 0, 0], targetPos: [0.4, -0.8, 0.2], dimensions: [0.2, 0.8, 0.2], color: '#ff69b4', type: 'box' },
      { id: 'h7', name: 'Leg Front Right', initialPos: [-4, 1, 1], targetPos: [0.4, -0.8, -0.2], dimensions: [0.2, 0.8, -0.2], color: '#ff69b4', type: 'box' },
      { id: 'h8', name: 'Leg Back Left', initialPos: [-1, -3, 3], targetPos: [-0.8, -0.8, 0.2], dimensions: [0.2, 0.8, 0.2], color: '#ff69b4', type: 'box' },
      { id: 'h9', name: 'Leg Back Right', initialPos: [1, -4, -3], targetPos: [-0.8, -0.8, -0.2], dimensions: [0.2, 0.8, -0.2], color: '#ff69b4', type: 'box' },
    ]
  }
];

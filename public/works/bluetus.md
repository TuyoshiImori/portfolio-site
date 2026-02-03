---
title: "Bluetus"
description: "Bluetoothデバイスの接続状態を一目で把握するシンプルな管理アプリ"
image: "bluetus/bluetus.jpg"
date: "2026-01-10"
tags: "#iOS #SwiftUI"
appStoreUrl: "https://apps.apple.com/jp/app/bluetus/id6757796070"
---

Bluetoothデバイスの接続状態を一目で確認できるシンプルな管理アプリ。イヤホン、スピーカー、自撮り棒など、複数のBluetoothデバイスを手軽に管理できます。

## 使用した技術

- SwiftUI
- SwiftData
- CoreBluetooth
- Google Mobile Ads

## 開発背景

旅行先で自撮り棒を使う際、設定アプリでのデバイス名が分かりづらく接続に手間取った経験から、より直感的なBluetooth管理アプリの必要性を感じました。Swift学習も兼ねて、ユーザーフレンドリーなデバイス管理アプリの開発に着手しました。

## 技術的なポイント

- **MVVMアーキテクチャ**を採用し、保守性の高い設計を実現
- **CoreBluetooth**と**SwiftData**を組み合わせ、既知デバイスの永続化と検出ロジックを実装
- **Google Mobile Ads**の統合により収益化を実現。ATT（App Tracking Transparency）にも対応
- iOS 26のLiquidGlassデザインに対応しつつ、下位バージョンでの表示互換性も確保

## 開発を通じて得た知見

SwiftUIによるネイティブ開発は、CoreBluetoothなどのシステムAPIに直接アクセスできる点が大きな強みです。サードパーティライブラリに依存せず、安定したBluetooth機能を実装できました。AIアシストを活用しながら公式ドキュメントで実装を検証することで、効率的に学習を進められました。
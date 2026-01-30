---
title: "Bluetus"
description: "Bluetoothデバイスの接続状態を一目で把握するシンプルな管理アプリ"
image: "bluetus/bluetus.jpg"
date: "2026-01-10"
tags: "#iOS #SwiftUI"
---

iPhone 上で Bluetooth デバイスの接続状態を手早く確認・管理できるユーティリティアプリ

## 使用した技術

- SwiftUI
- SwiftData
- CoreBluetooth
- Google Mobile Ads

## 「Bluetus」の開発背景

年末に旅行に行った時に、自撮り棒の起動方法と設定アプリのBluetoothデバイス名がわかりづらかったことが不便に感じたため、Swiftの勉強も兼ねてBluetoothデバイスの管理ができるアプリを作ろうと思い立ち作り始めました。

## 開発中に取り組んだこと・学び

- アーキテクチャ: MVVM を採用
- Bluetooth: CoreBluetooth を利用し、SwiftDataと組み合わせて既知デバイスの管理と検出ロジックを実装
- 広告: Google Mobile Ads を導入し、テストデバイスと ATT（App Tracking Transparency）への対応を実装

## 開発した感想

実装・開発のほとんどをAIに頼りつつ、実装内容を公式ドキュメントや技術記事と照らし合わせることで、Swiftによるネイティブアプリ開発の学びが深められたと思います。
同じアプリ開発ができるFlutterと異なりホットリロードが公式で対応していない点はやや開発体験が悪い一方、Bluetooth接続などでサードパーティプラグインを一切使用せずに済むのはネイティブアプリならではだと感じました。
またiOS26からLiquidGlassデザインが登場した影響で、非対応バージョンのiPhoneでの表示差異の確認が必要でした。
今回のような画面数の少ないアプリならまだしも、画面が多い大規模なアプリになったらデバッグが大変そうです。
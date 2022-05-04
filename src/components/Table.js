import React from "react";
import style from "./style";
import { View, Button, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useEffect } from "react";

export default function Table() {

    let [board, setBoard] = useState([]);
    let [player, setPlayer] = useState('');
    let [jogadas, setJogadas] = useState(0);
    let [screen, setScreen] = useState(true);
    let [winner, setWinner] = useState('');

//FALTA O DISABLED GLOBAL
    function start(p) {
        setPlayer(p);
        setJogadas(9);
       
        setBoard([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ])

        setScreen(false);

    }


    function play(r, c) {
        console.log("jogando")
        board[r][c] = player;
        setBoard([...board]);
        setPlayer(player === "X" ? "O" : "X")

        checkBoard(r, c, board)
    }

    function checkBoard(r, c, board) {

        //checar linha
        if (board[r][0] === board[r][1] && board[r][0] != "" && board[r][1] === board[r][2]) {
            return gameOver(board[r][0])
        }
        //checar colunas
        if (board[0][c] === board[1][c] && board[0][c] != "" && board[1][c] === board[2][c]) {
            return gameOver(board[0][c])
        }
        //checar diagonais
        if (board[0][0] === board[1][1] && board[0][0] != "" && board[1][1] === board[2][2]) {
            return gameOver(board[0][0])
        }
        if (board[0][2] === board[1][1] && board[0][2] != "" && board[1][1] === board[2][0]) {
            return gameOver(board[1][1])
        }
        //velha
        if (jogadas - 1 === 0) {
            return gameOver("")
        }

        //nao finalizado
        setJogadas(jogadas - 1)

    }

    function gameOver(player) {
        setWinner(player);

        if (winner === '' && jogadas - 1 === 0) {
            console.log("deu velha");
            alert("deu velha");
          
        }

        if (winner === 'X') {
            console.log("X ganhou");
            alert("X ganhou");
          
        }

        if (winner === 'O') {
            console.log("O ganhou");
            alert("O ganhou");
          
        }

    }

    useEffect(gameOver, [winner])

    return (
        screen === true ?
            <Welcome />
            :
            <>
                <View style={style.table}>
                    {
                        board.map((row, r) => {
                            return (
                                <View key={r} style={style.space}>
                                    {
                                        row.map((col, c) => {
                                            return (
                                            <TouchableOpacity key={c} style={style.square} onPress={() => play(r, c)} disabled={col !== ''} >
                                                <Text style={col === 'X' ? style.playerX : style.playerO} >{col}</Text>
                                            </TouchableOpacity>
                                           
                                           
                                            )
                                        })
                                    }
                                </View>
                            )
                        })
                    }
                </View>

                <Button title="Resetar Partida" onPress={()=>{reset()}} ></Button>
            </>
    )

    function reset(){
        setScreen(true)
    }


    function Welcome() {
        return (
            <View style={style.table}>
                <TouchableOpacity style={[style.square, style.margin]} onPress={() => start('X')} >
                    <Text style={style.playerX}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.square} onPress={() => start('O')} >
                    <Text style={style.playerO}>O</Text>
                </TouchableOpacity>

            </View>
        )

    }
}
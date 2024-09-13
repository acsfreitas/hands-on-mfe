$projects = @("composer", "body", "header", "contact")

foreach ($project in $projects) {
    Write-Output "Start project $project..."
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd $project; yarn start"
}
